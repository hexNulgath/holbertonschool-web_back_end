#!/usr/bin/env python3
"""
This module provides a function to calculate the
sum of all elements in a mixed list.
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Return the sum of all elements in a mixed list.

    Args:
        mxd_lst (List[int | float]): A list containing integers and/or floats.

    Returns:
        float: The sum of all elements in the list.
    """
    return sum(mxd_lst)
