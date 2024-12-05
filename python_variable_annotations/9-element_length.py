#!/usr/bin/env python3
"""
This module provides a function to get the length of each element in a list.

The `element_length` function takes an iterable of sequences as input and returns a list of tuples,
each containing a sequence and its length.

Example:
    >>> element_length([1, 2, 3])
    [(1, 1), (2, 1), (3, 1)]
    >>> element_length(["apple", "banana", "cherry"])
    [('apple', 5), ('banana', 6), ('cherry', 6)]
"""
from typing import Iterable, List, Tuple, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Returns a list of tuples"""
    return [(i, len(i)) for i in lst]
