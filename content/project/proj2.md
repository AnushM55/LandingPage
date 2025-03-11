---
title: "MassMobilisationInsights"
tags:
  - Projects
---

Interactive visualization of Mass Mobilisation data


# About the dataset

The dataset is sourced from [Mass mobilisation data project dataverse](https://dataverse.harvard.edu/dataverse/MMdata) 
It covers protest data from 162 countries between 1990 and March 2020.
For each protest event, the project records protester demands, government responses, protest location, and protester identities.

# What I did

## Data cleaning
- Removed NA values , removed inconsistent data
- Streamlined country codes : for example, Yugoslavia , which was dissolved in early nineties and Serbia , which was a country that was formed later in the same region,  contained the same country code.
- Removed irrelevant columns ( such as news source )
 
## Data transformation

- The fetched data source had 20+ columns . I transformed the big table into five different tables as a star schema.
- Defined relations between the five tables. Removed duplicates wherever necessary 

## Data visualization

- I visualized country-wise total protestor count in a bar chart
- I represented year-wise protestor count in a line chart.
- Choosing the country in the former would affect the later

## Things to be done

- Improved visualization of other key findings such as response type for each protest
- Modifying data values ( from boolean to numbers ) to perform better aggregation of certain types of columns 

# Inferences 
- Will be updated once the project is complete

# Project source

- You can check out the pbix files [here](https://github.com/AnushM55/MassMobilisationInsights)
