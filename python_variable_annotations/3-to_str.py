#!/usr/bin/env python3
"""
This module provides a function to convert a float number to a
string representation, rounded to two decimal places.
"""


def to_str(n: float) -> str:
    """
    Convert a float number to a string representation,
    rounded to two decimal places.
    """
    return "{:.2f}".format(n)
