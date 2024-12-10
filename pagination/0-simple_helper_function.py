#!/usr/bin/env python3
"""
Helper function to calculate the start and end index for pagination.
"""

from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Calculate the start and end index for a paginated dataset.
    Args:
        page (int): The current page number (1-indexed). Defaults to 1.
        page_size (int): The number of items per page. Defaults to 10.
    Returns:
        Tuple[int, int]: A tuple containing the start index (inclusive) and
        end index (exclusive) for the items in the current page.
    """
    start = (page - 1) * page_size
    end = page * page_size
    return start, end
