#!/usr/bin/env python3
"""
Helper function to calculate the start and end index for pagination.
"""
from typing import Tuple

def index_range(page: int = 1, page_size: int = 10) -> Tuple[int, int]:
    """Returns the start and end index for pagination"""
    return (page * page_size - page_size, page * page_size)
