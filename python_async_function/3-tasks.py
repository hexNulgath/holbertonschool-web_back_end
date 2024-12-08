#!/usr/bin/env python3
"""
This module defines a function to create an asyncio
task that waits for a random time.
""

from typing import asyncio

"""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Create an asyncio task that waits for a random time
    between 0 and max_delay (inclusive)
    """
    return asyncio.create_task(wait_random(max_delay))
