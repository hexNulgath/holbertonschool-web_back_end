#!/usr/bin/env python3
"""
Measures the runtime of an asynchronous function.

This function uses the asyncio library to measure the runtime
of the provided asynchronous function. It uses asyncio.gather()
to execute the function multiple times in parallel.
"""
import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Measure the runtime"""
    start_time = time.time()
    await asyncio.gather(async_comprehension(), async_comprehension(),
                   async_comprehension(), async_comprehension())
    end_time = time.time()
    return end_time - start_time
