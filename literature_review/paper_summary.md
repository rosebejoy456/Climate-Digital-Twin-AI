# Literature Review - Paper Summary

## Objective

This document summarizes the research papers reviewed for the Climate Digital Twin project. The purpose is to understand existing approaches for rainfall prediction, Digital Twins, and deep learning models used in weather forecasting.

---

| No. | Paper | Problem | Dataset | Model | Input | Output | Metrics | Key Contribution |
|:---:|-------|---------|---------|-------|-------|--------|---------|------------------|
| 1 | **Convolutional LSTM Network: A Machine Learning Approach for Precipitation Nowcasting** | Predict short-term rainfall (0–6 hours) | Radar Echo Dataset (Hong Kong Observatory) | ConvLSTM | Previous radar echo maps | Future radar echo/rainfall maps | CSI, HSS | Introduced **ConvLSTM**, combining convolution and LSTM to capture spatial and temporal information simultaneously. |
| 2 | **Deep Learning for Precipitation Nowcasting: A Benchmark and A New Model** | Improve rainfall nowcasting and establish a benchmark | HKO-7 Radar Dataset | TrajGRU | Radar echo sequences | Future radar maps | Balanced MSE, Balanced MAE, CSI, HSS | Proposed **TrajGRU** and introduced a benchmark for evaluating precipitation nowcasting models. |
| 3 | **Convcast: An Embedded Convolutional LSTM Based Architecture for Precipitation Nowcasting Using Satellite Data** | Satellite precipitation nowcasting | NASA IMERG Satellite Dataset | Convcast (ConvLSTM-based) | 10 consecutive satellite precipitation maps | 11th precipitation map and forecasts up to 150 minutes | Accuracy, RMSE | Demonstrated the effectiveness of **ConvLSTM** using satellite precipitation data. |
| 4 | **MS-Nowcasting: Operational Precipitation Nowcasting with Convolutional LSTMs at Microsoft Weather** | Real-time operational rainfall forecasting | MRMS Weather Radar + HRRR Model | Encoder–Forecaster ConvLSTM | Radar mosaics + HRRR forecasts | Future radar reflectivity | Forecast Accuracy | Demonstrated a production-ready **ConvLSTM** weather forecasting system used in Microsoft Weather. |
| 5 | **Precipitation Nowcasting Using Deep Neural Network** | Fast precipitation forecasting | 2D Precipitation Maps | U-Net, ConvLSTM, SVG-LP | Sequence of precipitation maps | Future precipitation maps | SSIM, MSE | Compared multiple deep learning architectures and proposed improved loss functions. |
| 6 | **Management of Climate Resilience: Exploring the Potential of Digital Twin Technology, 3D City Modelling, and Early Warning Systems** | Improve climate resilience using Digital Twins | Review of 68 studies | Digital Twin Framework | Real-time sensor data, IoT, GIS | Climate monitoring and early warning | Literature Review | Explained the role of Digital Twins in climate resilience, smart cities, and disaster management. |
---

# Key Observations

- ConvLSTM is the most widely used deep learning architecture for precipitation nowcasting.
- ConvLSTM performs better than traditional LSTM because it preserves spatial information while learning temporal relationships.
- Satellite datasets such as NASA IMERG and weather radar data are commonly used for rainfall prediction.
- Operational weather forecasting systems such as Microsoft Weather successfully deploy ConvLSTM models in production.
- Digital Twins integrate real-world sensor data with virtual models for climate monitoring, simulation, and early warning systems.
- Recent research combines AI, satellite observations, IoT sensors, and Digital Twins to improve climate resilience.

---

# Conclusion

Based on the reviewed literature, ConvLSTM is the most suitable baseline model for the Climate Digital Twin project because it effectively models both spatial and temporal characteristics of rainfall data. The Digital Twin concept complements the AI model by enabling continuous monitoring, prediction, and visualization of climate conditions using real-time environmental data.