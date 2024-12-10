#!/usr/bin/env python3
"""
Asynchronously generates a sequence of 10 random floating-point
numbers between 1 and 10.#+
This function is a coroutine that uses the `async` keyword and the
`await` keyword to#+
yield random numbers asynchronously. It uses the `asyncio.sleep()`
function to introduce#+
a delay of 1 second between each number generation.#+

Parameters:
None

Returns:
float: A random floating-point number between 1 and 10.#+
"""
import asyncio
import random


async def async_generator():
    """Generates random numbers"""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
