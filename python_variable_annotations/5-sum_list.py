#!/usr/bin/env python3
"""
Function to sum a list of floats

Args:
    input_list (List[float]): A list of floats

Returns:
    float: The sum of the input list
"""

from typing import List


def sum_list(input_list: List[float]) -> float:
    """
    Sums a list of floats

    Args:
        input_list (List[float]): A list of floats

    Returns:
        float: The sum of the input list
    """
    return sum(input_list)
