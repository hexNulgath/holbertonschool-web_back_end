#!/usr/bin/env python3
"""
Generates a sequence of 10 random numbers using asynchronous comprehension.

This function utilizes an asynchronous generator to
produce a sequence of random numbers.
The async_generator function is expected to yield
10 random numbers asynchronously.
The function then uses asynchronous comprehension
to collect these numbers into a list
Parameters:
None

Returns:
List[float]: A list containing 10 random numbers.
"""
import asyncio
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Generates a sequence of 10 random numbers"""
    return [i async for i in async_generator()]
