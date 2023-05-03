import * as React from 'react';
import { useEffect, useState } from "react";

// handler to fetch data from the API
export default async function handler(endpoint) {
    const response = await fetch('https://webproxy.fh-kufstein.ac.at/' + endpoint, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
      });
            
    const data = await response.json();
    return data;
  }