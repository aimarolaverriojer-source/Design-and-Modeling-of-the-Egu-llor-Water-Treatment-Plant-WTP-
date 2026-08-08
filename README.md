# Design and Modeling of the Eguillor Water Treatment Plant (WTP)
Feasibility analysis and design of a hydraulic turbine system for energy recovery at the Eguillor water treatment plant.

# Turbine Design and Modeling for the Eguillor Water Treatment Plant[cite: 1]

## Project Description
This repository contains the technical and energetic feasibility analysis for installing a hydraulic turbine in the pipeline feeding the Eguillor Water Treatment Plant (ETAP)[cite: 1]. The main objective is to harness the existing ~7-meter head from the Arteta spring to generate electrical energy from head losses, without compromising the water supply[cite: 1].

## Objectives
*   **Energy Recovery:** Convert dissipated energy into usable electricity to reduce the plant's consumption[cite: 1].
*   **Service Continuity:** Integrate a by-pass system to ensure the plant's normal operation and water quality are unaffected[cite: 1].
*   **Sustainability:** Demonstrate that energy recovery in water pipelines is an efficient and sustainable measure for water management[cite: 1].

## Technical Parameters & Proposed Solution
After analyzing the high variability of the available flow, an **Asymmetric Tandem** configuration is proposed to maximize efficiency[cite: 1]:
*   **Group A (Main Turbine):** Kaplan-type axial turbine (Global Hydro reference or similar), designed for a base load of 0.45 m³/s and an estimated power of ~25.51 kW[cite: 1].
*   **Group B (Secondary Turbine):** Compact axial turbine, Propeller or Semi-Kaplan type (Andritz Hydro reference), designed for minimum flows (0.25 m³/s) with a power of ~12.69 kW[cite: 1].
*   **Total Installed Power:** 38.2 kW[cite: 1].

## My Contribution: Control, Electrical System, and Project Management
As a member of Group 8, I was responsible for the **Project Management** (coordinating the team's workflow and organizing the final documentation) and I fully developed **Section 7: Electrical System and Control**[cite: 1].

My specific technical contributions include:
*   **Electrical Circuit Design:** Developed a complete control circuit (designed with CADE_SIMU) that automatically manages the water flow through motorized valves[cite: 1]. The system uses limit switches to distribute flow between the main Kaplan turbine and the "satellite" turbine based on real-time flow thresholds (< 300 L/s, 300-550 L/s, and > 550 L/s)[cite: 1].
*   **Kaplan Turbine Dynamic Modeling (MATLAB):** Created a MATLAB script to model the dynamic response of the Kaplan turbine's pitch control[cite: 1]. I designed a first-order transfer function relating generated power to pitch angle based on flow rate, maximizing efficiency[cite: 1].
    *   *System Analysis:* Used Bode diagrams and step response plots to demonstrate that the turbine responds well to low frequencies but acts as a slow system[cite: 1]. This proves that the pitch control must act progressively to avoid instability and energy loss from water impact[cite: 1].
*   **Electrical Protections:** Defined the required protection schemes (overcurrent, differential, over/under frequency) and hydraulic safety protocols to prevent cavitation and overpressure[cite: 1].
*   **Mechanical Stress Analysis (SolidWorks):** Conducted a Finite Element Analysis (FEA) on the Kaplan runner blades to verify structural integrity under hydraulic loads[cite: 1]. 
    *   *Results:* Under a pressure of 150,000 Pa, the maximum von Mises stress was ~35 MPa, yielding a Factor of Safety (FOS) of ~4, confirming the design remains well within the elastic limit (yield strength: 137.9 MPa)[cite: 1].

## Economic Viability
*   **Estimated Total Investment:** €108,000[cite: 1].
*   **Annual Generation:** 240,000 kWh/year[cite: 1].
*   **Estimated Economic Savings:** €24,000/year (assuming €0.10/kWh)[cite: 1].
*   **Return on Investment (ROI):** 4.5 years[cite: 1].

## Authors (Group 8 - Universidad Pública de Navarra)
*   Daniel Lauroba Ruiz[cite: 1]
*   Héctor Bazo Ochoa[cite: 1]
*   Jorge Ochoa Gutiérrez[cite: 1]
*   Aimar Olaverri Ojer[cite: 1]
*   Guillermo Fernández Roncal[cite: 1]
