#!/usr/bin/env python3
"""
Define an asynchronous function wait_random that takes an optional
integer max_delay as a parameter.
The function should sleep for a random time between 0 and max_delay seconds,
and then return a random float value.

If no max_delay is provided, the function should default to a
maximum delay of 10 seconds.

Your function should be implemented using asyncio.sleep and random.randint.
"""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    '''
    Wait for a random time between 0 and max_delay (inclusive)
    '''
    await asyncio.sleep(random.uniform(0, max_delay))
    return random.random()
