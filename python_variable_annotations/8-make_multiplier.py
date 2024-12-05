#!/usr/bin/env python3
"""
This module provides a function to create a multiplier function.

The `make_multiplier` function returns another function that multiplies
a given number by a specified multiplier.
"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Create a function that multiplies a given number.

    Args:
        multiplier (float): The number to multiply by.

    Returns:
        Callable[[float], float]: A function that multiplies
        a given number by the multiplier.

    Example:
        >>> multiply_by_3 = make_multiplier(3)
        >>> multiply_by_3(10)
        30.0
    """
    def multiply_by_multiplier(x: float) -> float:
        """
        Multiply the given number by the multiplier.

        Args:
            x (float): The number to be multiplied.

        Returns:
            float: The result of multiplying `x` by `multiplier`.
        """
        return x * multiplier

    return multiply_by_multiplier
