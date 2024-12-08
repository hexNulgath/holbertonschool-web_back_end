#!/usr/bin/env python3
"""
Define an asynchronous function wait_n that takes an
integer n and an integer max_delay as parameters.
The function should create a list of n tasks, each waiting for
a random time between 0 and max_delay seconds using the wait_random function.

The tasks should be executed concurrently using asyncio.gather.

Your function should be implemented using asyncio.sleep and random.randint.
"""
from typing import List
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Wait for n random times between 0 and max_delay (inclusive)
    and return a list of these delays.

    Each task should be executed concurrently using asyncio.gather.
    """
    tasks = []
    for i in range(n):
        tasks.append(wait_random(max_delay))
    list = await asyncio.gather(*tasks)
    return sorted(list)
