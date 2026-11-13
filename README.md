
# HRTOS — Hard Real-Time Operating System for 8051

<p align="center">
  <img src="https://en.hrtos.com/assets/images/logo.svg" alt="HRTOS Logo" width="180">
</p>

<h3 align="center">
  Engineering Real-Time on 8051
</h3>

<p align="center">
  A continuously maintained real-time operating system
  designed specifically for the 8051 / MCS-51 architecture.
</p>

<p align="center">
  <a href="https://en.hrtos.com/">Official Website</a> ·
  <a href="https://en.hrtos.com/product/">Product Overview</a> ·
  <a href="https://en.hrtos.com/docs/">Documentation</a> ·
  <a href="https://en.hrtos.com/download/">Download</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Architecture-8051-blue">
  <img src="https://img.shields.io/badge/Toolchain-Keil%20C51-orange">
  <img src="https://img.shields.io/badge/Version-4.0.0-green">
  <img src="https://img.shields.io/badge/Platform-MCS--51-blueviolet">
  <img src="https://img.shields.io/badge/Status-Maintained-brightgreen">
</p>

---

## 1. Introduction

HRTOS is a real-time operating system developed specifically for the 8051 microcontroller architecture.

The project focuses on deterministic task scheduling, interrupt response, synchronization, inter-task communication, and engineering-oriented resource management.

Unlike operating systems designed for general-purpose processors and subsequently adapted to small microcontrollers, HRTOS is built around the characteristics and constraints of the 8051 architecture.

It aims to provide a practical and structured software foundation for developing complex embedded applications on traditional 8-bit microcontrollers.

HRTOS has evolved through multiple development stages and is currently maintained as a complete 8051-oriented operating system project.

**Core objectives:**

- Native support for the 8051 / MCS-51 architecture.
- Preemptive real-time task scheduling.
- Fast task switching and interrupt handling.
- Structured task and resource management.
- Inter-task synchronization and communication.
- Practical hardware driver integration.
- Engineering-oriented APIs and development documentation.
- Long-term maintenance of the 8051 software ecosystem.

Learn more:

- [HRTOS Official Website](https://en.hrtos.com/)
- [Product Overview](https://en.hrtos.com/product/overview.html)
- [Project History](https://en.hrtos.com/about/history.html)

---

## 2. Why HRTOS?

The 8051 architecture remains relevant in many embedded applications, particularly in industrial control, instrumentation, consumer electronics, and dedicated control systems.

However, developing increasingly complex applications on resource-constrained 8-bit microcontrollers presents several challenges.

Typical challenges include:

- Managing multiple independent application tasks.
- Coordinating asynchronous events.
- Handling interrupts with predictable execution behavior.
- Managing shared resources.
- Maintaining application structure as software complexity increases.
- Integrating peripheral drivers and communication protocols.

HRTOS addresses these challenges by providing an integrated operating-system environment for 8051 development.

Rather than treating the 8051 as a platform limited to simple polling-based applications, HRTOS provides a framework for building structured, multitasking embedded systems.

### Design Philosophy

HRTOS follows several important engineering principles:

**8051 Native**

Designed specifically around the 8051 instruction set, memory model, register banks, and hardware characteristics.

**Real-Time Oriented**

Scheduling and interrupt mechanisms are designed to support time-sensitive embedded applications.

**Complete System**

Provides kernel services, task management, synchronization, communication, shell functionality, and application-level integration.

**Engineering Practicality**

Focuses on usable APIs, hardware compatibility, testing, and development documentation.

**Continuous Maintenance**

The project is intended to preserve and extend the practical value of the 8051 software ecosystem.

---

## 3. Key Features

### 3.1 Real-Time Scheduling

HRTOS provides a preemptive scheduling mechanism designed for multitasking embedded applications.

Features include:

- Priority-based task scheduling.
- Time-slice scheduling.
- Task delay and timed waiting.
- Task suspension and resumption.
- Fast task support.
- Scheduling control mechanisms.

Learn more:

[Scheduler Architecture](https://en.hrtos.com/features/scheduler.html)

### 3.2 Interrupt Management

Interrupt handling is an important part of real-time embedded systems.

HRTOS provides interrupt-related mechanisms designed for the 8051 interrupt architecture.

Features include:

- Interrupt-aware task scheduling.
- Nested interrupt support.
- Interrupt priority management.
- Fast interrupt-related task mechanisms.
- ISR and task interaction.

Learn more:

[Interrupt Management](https://en.hrtos.com/features/interrupt.html)

### 3.3 Synchronization

HRTOS provides synchronization mechanisms for coordinating concurrent tasks.

Available mechanisms include:

- Semaphores.
- Mutexes.
- Event flags.
- Unified waiting mechanisms.

Priority inheritance is supported by the mutex mechanism to help address priority inversion.

Learn more:

[Synchronization](https://en.hrtos.com/features/synchronization.html)

### 3.4 Inter-Task Communication

Communication between tasks is essential for modular embedded software.

HRTOS provides:

- Message queues.
- Mailboxes.
- Event-based communication.
- Task notification mechanisms.

Learn more:

[Communication](https://en.hrtos.com/features/communication.html)

### 3.5 Shell and Debugging

HRTOS includes an interactive shell extension for system inspection and development.

The shell provides commands for inspecting system information, task status, and version information.

Learn more:

[Documentation](https://en.hrtos.com/docs/)

---

## 4. System Architecture

HRTOS is organized around a kernel and a collection of system services and extensions.

The architecture separates core scheduling mechanisms from higher-level application functions.

### Main Components

| Component | Description |
|---|---|
| Kernel | Core operating-system functionality |
| Task Management | Task creation and lifecycle management |
| Scheduler | Priority-based scheduling |
| Time Management | System tick and delay services |
| Interrupt Management | Interrupt-related system mechanisms |
| Synchronization | Semaphores, mutexes, and events |
| Communication | Message queues and mailboxes |
| Shell | Interactive system interface |
| Modbus RTU | Industrial communication extension |
| Drivers | Peripheral and hardware drivers |

### Architecture Documentation

- [Architecture Overview](https://en.hrtos.com/architecture/)
- [Kernel](https://en.hrtos.com/architecture/kernel.html)
- [Memory Management](https://en.hrtos.com/architecture/memory.html)
- [Scheduling](https://en.hrtos.com/architecture/scheduling.html)
- [Task Management](https://en.hrtos.com/architecture/task-management.html)
- [Interrupt Model](https://en.hrtos.com/architecture/interrupt-model.html)
- [Resource Management](https://en.hrtos.com/architecture/resource-management.html)

---

## 5. Target Hardware and Development Environment

HRTOS is designed for the 8051 / MCS-51 microcontroller family.

The development environment is based on the Keil C51 toolchain.

### Development Platform

| Item | Configuration |
|---|---|
| Processor Architecture | 8051 / MCS-51 |
| Compiler | Keil C51 |
| Language | C |
| Default Oscillator | 11.0592 MHz |
| Kernel Version | HRTOS V4.0.0 |
| Hardware Focus | STC 8051 Microcontrollers |

### Hardware Platforms

HRTOS development and testing have included representative STC microcontroller platforms.

**STC12 Series**

A platform used for functional verification and timing measurements.

[STC12 Hardware Information](https://en.hrtos.com/hardware/stc12.html)

**STC8 Series**

A platform used for stress testing and extended execution verification.

[STC8 Hardware Information](https://en.hrtos.com/hardware/stc8.html)

For hardware-specific details, see:

[Hardware Compatibility](https://en.hrtos.com/hardware/)

---

## 6. Performance and Testing

Real-time performance is an important part of HRTOS engineering.

The project includes timing measurements and stress-testing activities to evaluate scheduling behavior, interrupt response, and long-running system stability.

### Representative Timing Measurements

The following measurements were obtained on an STC12C5A60S2 running at 11.0592 MHz in 1T mode.

| Test Item | Measured Result |
|---|---:|
| Normal Task Switch (Scheduling Bit) | 394.33 µs |
| Normal Task Switch (Time Slice) | 550.33 µs |
| Fast Task Switch (Scheduling Bit) | 143.50 µs |
| Fast Task Switch (Time Slice) | 229.50 µs |
| Interrupt Response Measurement | 12.167 µs |
| Nested Interrupt Measurement | 11.917 µs |

These values are representative measurements from a specific hardware and compiler configuration. They should not be interpreted as universal timing guarantees.

Actual results may vary with compiler settings, clock frequency, application code, interrupt nesting, and hardware configuration.

### Stress Testing

HRTOS has also undergone extended stress testing on STC8 hardware.

Representative testing records include:

- More than 8,800 test rounds.
- Approximately 71% CPU utilization during the test.
- More than 72 hours of continuous execution.
- More than 1,600 test nodes.
- More than 35 million test variations without reported errors.

These results describe the project's recorded test environment and are not a formal certification of all possible operating conditions.

### Performance Documentation

- [Performance Overview](https://en.hrtos.com/performance/)
- [Benchmarks](https://en.hrtos.com/performance/benchmarks.html)
- [Context Switching](https://en.hrtos.com/performance/context-switch.html)
- [Interrupt Latency](https://en.hrtos.com/performance/interrupt-latency.html)
- [Timing Accuracy](https://en.hrtos.com/performance/timing-accuracy.html)
- [Stress Testing](https://en.hrtos.com/performance/stress-test.html)
- [Test Environment](https://en.hrtos.com/performance/test-environment.html)

---

## 7. Hardware Drivers and Extensions

HRTOS is designed to work with peripheral drivers and application-level extensions.

The project provides a foundation for integrating commonly used embedded hardware and communication interfaces.

### Driver Categories

**Sensors**

Support for integrating sensor modules into multitasking applications.

[Sensor Drivers](https://en.hrtos.com/drivers/sensors.html)

**Communication**

Communication-related drivers and protocol integration.

[Communication Drivers](https://en.hrtos.com/drivers/communication.html)

**Display**

Display-related driver integration.

[Display Drivers](https://en.hrtos.com/drivers/display.html)

### System Extensions

The project includes or supports several extension modules:

- Modbus RTU slave functionality.
- Interactive Shell.
- Cooperative scheduling extension.
- MyOS extension.
- Hardware abstraction and driver integration.

The exact availability of each extension depends on the selected project configuration.

---

## 8. Application Examples

Practical examples help developers understand how HRTOS can be integrated into embedded applications.

The website provides examples covering several common 8051 application scenarios.

| Example | Application |
|---|---|
| Infrared | Infrared signal processing |
| DHT11 | Temperature and humidity acquisition |
| OLED | Display integration |
| Modbus RTU | Industrial communication |

Explore the examples:

- [All Examples](https://en.hrtos.com/examples/)
- [Infrared Example](https://en.hrtos.com/examples/infrared.html)
- [DHT11 Example](https://en.hrtos.com/examples/dht11.html)
- [OLED Example](https://en.hrtos.com/examples/oled.html)
- [Modbus RTU Example](https://en.hrtos.com/examples/modbus.html)

---

## 9. Getting Started

Developers who are new to HRTOS can start with the documentation section.

Recommended learning sequence:

1. Understand the HRTOS product architecture.
2. Review hardware and memory requirements.
3. Prepare the Keil C51 development environment.
4. Configure the HRTOS project.
5. Register application tasks.
6. Build and download the application.
7. Test task scheduling and system services.

### Documentation

- [Documentation Home](https://en.hrtos.com/docs/)
- [Getting Started](https://en.hrtos.com/docs/getting-started.html)
- [Installation Guide](https://en.hrtos.com/docs/installation.html)
- [API Reference](https://en.hrtos.com/docs/api.html)
- [Frequently Asked Questions](https://en.hrtos.com/docs/faq.html)

For downloads:

[HRTOS Download Center](https://en.hrtos.com/download/)

---

## 10. Project History

HRTOS originated in 2017 as an operating-system development project focused on the 8051 architecture.

Over time, the project evolved through multiple versions and accumulated kernel functionality, hardware-related development experience, technical documentation, and application examples.

The current HRTOS V4.0.0 represents an important stage in the project's development.

The long-term objective is to maintain a practical and complete software ecosystem for 8051-based embedded development.

The project continues to focus on the 8051 architecture rather than expanding indiscriminately to unrelated processor platforms.

Read more:

[HRTOS Project History](https://en.hrtos.com/about/history.html)

---

## 11. Frequently Asked Questions

### What is HRTOS?

HRTOS is a real-time operating system designed specifically for the 8051 / MCS-51 microcontroller architecture.

### Which processors does HRTOS target?

HRTOS targets 8051-compatible microcontrollers, including supported STC platforms.

### Which compiler is used?

The primary development environment is Keil C51.

### Does HRTOS support multitasking?

Yes. HRTOS provides preemptive task scheduling and multiple task coordination mechanisms.

### Does HRTOS support Modbus RTU?

The project includes a Modbus RTU slave extension.

### Is HRTOS actively maintained?

The project is maintained as a long-term 8051-oriented software project.

### Where can I find technical documentation?

Visit the official documentation website:

https://en.hrtos.com/docs/

More questions:

[HRTOS FAQ](https://en.hrtos.com/docs/faq.html)

---

## 12. Project Resources

| Resource | Link |
|---|---|
| Official Website | https://en.hrtos.com/ |
| Product Overview | https://en.hrtos.com/product/ |
| Features | https://en.hrtos.com/features/ |
| Architecture | https://en.hrtos.com/architecture/ |
| Performance | https://en.hrtos.com/performance/ |
| Hardware | https://en.hrtos.com/hardware/ |
| Drivers | https://en.hrtos.com/drivers/ |
| Examples | https://en.hrtos.com/examples/ |
| Documentation | https://en.hrtos.com/docs/ |
| Downloads | https://en.hrtos.com/download/ |
| Project History | https://en.hrtos.com/about/history.html |
| Contact | https://en.hrtos.com/about/contact.html |

---

## 13. Project Philosophy

The 8051 architecture has a long history in embedded systems.

Although newer microcontroller architectures have emerged, the 8051 remains a practical platform for many dedicated embedded applications.

HRTOS is built on the belief that an established architecture can continue to benefit from structured software engineering, reliable system services, and continuous maintenance.

The goal is not simply to provide a small scheduler.

The goal is to make the 8051 development experience more structured, more capable, and more maintainable.

**HRTOS — Engineering Real-Time on 8051.**

---

<p align="center">
  <a href="https://en.hrtos.com/">
    Official Website
  </a>
  &nbsp; | &nbsp;
  <a href="https://en.hrtos.com/docs/">
    Documentation
  </a>
  &nbsp; | &nbsp;
  <a href="https://en.hrtos.com/download/">
    Download
  </a>
</p>

<p align="center">
  Copyright © 2017-2026 HRTOS.
</p>
