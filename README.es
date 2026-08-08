*Leer en [Español](README_es.md)*

# Diseño y Modelizado de Turbina para la ETAP de Eguillor

## Descripción del Proyecto
Este repositorio contiene el análisis de viabilidad técnica y energética para la instalación de una turbina hidráulica en la conducción que alimenta la Estación de Tratamiento de Agua Potable (ETAP) de Eguillor. El objetivo principal es aprovechar el desnivel existente (aproximadamente 7 metros) desde el manantial de Arteta para generar energía eléctrica a partir de las pérdidas de carga, sin comprometer el suministro de agua.

## Objetivos
*   **Recuperación energética:** Convertir la energía disipada en electricidad utilizable para reducir el consumo de la planta.
*   **Continuidad del servicio:** Integrar un sistema *by-pass* para no afectar la operación ordinaria de la ETAP ni la calidad del agua suministrada.
*   **Sostenibilidad:** Demostrar que la recuperación en conducciones es una medida eficiente y sostenible para la gestión hídrica.

## Parámetros Técnicos y Solución Propuesta
Tras analizar la gran variabilidad del caudal disponible, se propone una configuración en **Tándem Asimétrico** para maximizar la eficiencia:
*   **Grupo A (Turbina Principal):** Turbina axial tipo Kaplan (referencia Global Hydro o similar), diseñada para una carga base de 0,45 m³/s y una potencia estimada de ~25,51 kW.
*   **Grupo B (Turbina Secundaria):** Turbina axial compacta tipo Hélice o Semi-Kaplan (referencia Andritz Hydro), ideada para caudales mínimos (0,25 m³/s) con una potencia de ~12,69 kW.
*   **Potencia Total Instalada:** 38,2 kW.

## Mi Contribución: Sistema de Control, Eléctrico y Gestión del Proyecto
Como miembro del Grupo 8, fui responsable de la **Gestión del Proyecto** (organizando el trabajo del equipo y la documentación final) y desarrollé íntegramente el **Apartado 7: Sistema eléctrico y control**.

Mis contribuciones técnicas específicas incluyen:
*   **Diseño del Circuito Eléctrico:** Desarrollé un esquema de mando (diseñado con CADE_SIMU) que modula automáticamente el caudal mediante válvulas actuadoras[cite: 1]. El sistema utiliza finales de carrera para distribuir el agua entre la turbina Kaplan principal y la turbina "satélite" basándose en los umbrales de caudal (< 300 L/s, 300-550 L/s y > 550 L/s).
*   **Modelado Dinámico de la Turbina Kaplan (MATLAB):** Creé un script en MATLAB para modelar la respuesta dinámica del control de paso de palas (pitch)[cite: 1]. Diseñé una función de transferencia de primer orden que relaciona la potencia generada con el ángulo de las palas en función del caudal.
    *   *Análisis del Sistema:* Mediante diagramas de Bode y la respuesta al escalón, demostré que la turbina responde bien a frecuencias bajas pero es un sistema lento[cite: 1]. Esto justifica que el control de palas debe ser progresivo para evitar inestabilidad y pérdida de energía cinética.
*   **Protecciones Eléctricas:** Definí los esquemas de protección necesarios (sobreintensidad, diferencial, sub/sobrefrecuencia) y protocolos de seguridad hidráulica para evitar cavitación y sobrepresiones.
*   **Análisis de Tensiones Mecánicas (SolidWorks):** Realicé un análisis de elementos finitos (FEA) sobre las palas del rodete Kaplan para verificar su integridad bajo cargas hidráulicas.
    *   *Resultados:* Sometidas a 150.000 Pa, la tensión máxima de von Mises fue de ~35 MPa, obteniendo un Factor de Seguridad (FOS) de ~4, lo que confirma que el diseño soporta holgadamente los requerimientos (límite elástico: 137,9 MPa).

## Viabilidad Económica
*   **Inversión Total Estimada:** 108.000 €.
*   **Generación Anual:** 240.000 kWh/year.
*   **Ahorro Económico Estimado:** 24.000 €/año (asumiendo 0,10 €/kWh).
*   **Retorno de Inversión (ROI):** 4,5 años.

## Autores del Proyecto (Grupo 8 - Universidad Pública de Navarra)
*   Daniel Lauroba Ruiz
*   Héctor Bazo Ochoa
*   Jorge Ochoa Gutiérrez
*   Aimar Olaverri Ojer
*   Guillermo Fernández Roncal
