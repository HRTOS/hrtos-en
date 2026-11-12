
/* =========================================================
 * HRTOS International Website
 * ---------------------------------------------------------
 * File        : main.js
 * Project     : HRTOS
 * Website     : https://en.hrtos.com/
 * Description : Global website interaction and UI behavior
 * Version     : 1.0.0
 * Copyright   : HRTOS Project
 * ========================================================= */

(function () {
    "use strict";

    /* =====================================================
     * Configuration
     * ===================================================== */

    const CONFIG = {
        scrollThreshold: 50,
        animationThreshold: 0.12,
        animationDuration: 600
    };


    /* =====================================================
     * Utility Functions
     * ===================================================== */

    const $ = (selector, parent = document) => {
        return parent.querySelector(selector);
    };

    const $$ = (selector, parent = document) => {
        return Array.from(parent.querySelectorAll(selector));
    };


    /* =====================================================
     * Mobile Navigation
     * ===================================================== */

    function initMobileNavigation() {

        const header = $(".site-header");
        const nav = $(".main-nav");

        if (!header || !nav) return;

        let menuButton = $(".menu-toggle", header);

        if (!menuButton) {

            menuButton = document.createElement("button");

            menuButton.className = "menu-toggle";
            menuButton.type = "button";
            menuButton.setAttribute("aria-label", "Open navigation");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-controls", "main-navigation");

            menuButton.innerHTML = `
                <span></span>
                <span></span>
                <span></span>
            `;

            header.querySelector(".header-inner")?.appendChild(menuButton);
        }

        nav.id = "main-navigation";

        function closeMenu() {

            nav.classList.remove("active");
            menuButton.classList.remove("active");

            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation");

            document.body.classList.remove("menu-open");
        }

        function toggleMenu() {

            const isOpen = nav.classList.toggle("active");

            menuButton.classList.toggle("active", isOpen);

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );

            document.body.classList.toggle("menu-open", isOpen);
        }

        menuButton.addEventListener("click", toggleMenu);

        $$(".main-nav a").forEach(link => {

            link.addEventListener("click", closeMenu);

        });

        document.addEventListener("keydown", event => {

            if (event.key === "Escape") {
                closeMenu();
            }

        });

        document.addEventListener("click", event => {

            if (
                nav.classList.contains("active") &&
                !nav.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {
                closeMenu();
            }

        });

        window.addEventListener("resize", () => {

            if (window.innerWidth > 1024) {
                closeMenu();
            }

        });

    }


    /* =====================================================
     * Header Scroll Effect
     * ===================================================== */

    function initHeaderScroll() {

        const header = $(".site-header");

        if (!header) return;

        function updateHeader() {

            const scrolled =
                window.scrollY > CONFIG.scrollThreshold;

            header.classList.toggle("scrolled", scrolled);

        }

        window.addEventListener(
            "scroll",
            updateHeader,
            { passive: true }
        );

        updateHeader();

    }


    /* =====================================================
     * Active Navigation
     * ===================================================== */

    function initActiveNavigation() {

        const currentPath = window.location.pathname;

        const links = $$(".main-nav a");

        links.forEach(link => {

            const href = link.getAttribute("href");

            if (!href || href.startsWith("#")) return;

            try {

                const linkURL = new URL(href, window.location.href);

                const linkPath = linkURL.pathname.replace(/\/+$/, "");
                const pagePath = currentPath.replace(/\/+$/, "");

                if (
                    linkPath === pagePath ||
                    (
                        linkPath !== "" &&
                        pagePath.startsWith(linkPath + "/")
                    )
                ) {

                    link.classList.add("active");

                } else {

                    link.classList.remove("active");

                }

            } catch (error) {

                console.warn("Invalid navigation URL:", href);

            }

        });

    }


    /* =====================================================
     * Reading Progress Bar
     * ===================================================== */

    function initReadingProgress() {

        const progress = document.createElement("div");

        progress.className = "reading-progress";

        progress.setAttribute("aria-hidden", "true");

        document.body.appendChild(progress);

        function updateProgress() {

            const scrollTop = window.scrollY;

            const documentHeight =
                document.documentElement.scrollHeight -
                window.innerHeight;

            const percentage = documentHeight > 0
                ? (scrollTop / documentHeight) * 100
                : 0;

            progress.style.width =
                Math.min(100, Math.max(0, percentage)) + "%";

        }

        window.addEventListener(
            "scroll",
            updateProgress,
            { passive: true }
        );

        window.addEventListener("resize", updateProgress);

        updateProgress();

    }


    /* =====================================================
     * Back To Top
     * ===================================================== */

    function initBackToTop() {

        const button = document.createElement("button");

        button.className = "back-to-top";

        button.type = "button";

        button.setAttribute("aria-label", "Back to top");

        button.innerHTML = "¡ü";

        document.body.appendChild(button);

        function updateButton() {

            button.classList.toggle(
                "visible",
                window.scrollY > 400
            );

        }

        button.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

        window.addEventListener(
            "scroll",
            updateButton,
            { passive: true }
        );

        updateButton();

    }


    /* =====================================================
     * Scroll Reveal Animation
     * ===================================================== */

    function initScrollReveal() {

        const elements = $$(
            ".content-card, " +
            ".scope-item, " +
            ".philosophy-item, " +
            ".timeline-item"
        );

        if (!elements.length) return;

        if (
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches
        ) {
            return;
        }

        if (!("IntersectionObserver" in window)) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries, instance) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("revealed");

                        instance.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: CONFIG.animationThreshold
            }
        );

        elements.forEach(element => {

            element.classList.add("reveal");

            observer.observe(element);

        });

    }


    /* =====================================================
     * Smooth Anchor Scrolling
     * ===================================================== */

    function initSmoothScrolling() {

        $$('a[href^="#"]').forEach(link => {

            link.addEventListener("click", event => {

                const targetID =
                    link.getAttribute("href");

                if (!targetID || targetID === "#") return;

                const target = $(targetID);

                if (!target) return;

                event.preventDefault();

                const header = $(".site-header");

                const headerHeight = header
                    ? header.offsetHeight
                    : 0;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

            });

        });

    }


    /* =====================================================
     * Image Error Protection
     * ===================================================== */

    function initImageProtection() {

        $$("img").forEach(image => {

            image.addEventListener("error", function () {

                this.classList.add("image-error");

                this.setAttribute(
                    "data-image-error",
                    "true"
                );

            });

        });

    }


    /* =====================================================
     * Automatic Footer Year
     * ===================================================== */

    function initFooterYear() {

        const footerTexts = $$(".footer-bottom p");

        footerTexts.forEach(element => {

            if (element.textContent.includes("HRTOS Project")) {

                element.textContent =
                    `? 2017¨C${new Date().getFullYear()} HRTOS Project. All rights reserved.`;

            }

        });

    }


    /* =====================================================
     * External Link Security
     * ===================================================== */

    function initExternalLinks() {

        $$('a[target="_blank"]').forEach(link => {

            const rel = new Set(
                (link.getAttribute("rel") || "")
                    .split(/\s+/)
                    .filter(Boolean)
            );

            rel.add("noopener");
            rel.add("noreferrer");

            link.setAttribute("rel", [...rel].join(" "));

        });

    }


    /* =====================================================
     * Initialize Website
     * ===================================================== */

    function init() {

        initMobileNavigation();

        initHeaderScroll();

        initActiveNavigation();

        initReadingProgress();

        initBackToTop();

        initScrollReveal();

        initSmoothScrolling();

        initImageProtection();

        initFooterYear();

        initExternalLinks();

        document.documentElement.classList.add("js-ready");

        console.log(
            "HRTOS Website initialized successfully."
        );

    }


    /* =====================================================
     * DOM Ready
     * ===================================================== */

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            init,
            { once: true }
        );

    } else {

        init();

    }

})();
