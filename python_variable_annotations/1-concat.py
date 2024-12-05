#!/usr/bin/env python3
"""
This module provides a utility function for string concatenation.

Functions:
    - concat(str1: str, str2: str) -> str: Concatenates two strings and returns the result.
"""

def concat(str1: str, str2: str) -> str:
    """
    Concatenates two strings and returns the result.

    Args:
        str1 (str): The first string.
        str2 (str): The second string.

    Returns:
        str: The concatenated string.

    Example:
        >>> concat("Hello, ", "World!")
        'Hello, World!'
    """
    return str1 + str2
