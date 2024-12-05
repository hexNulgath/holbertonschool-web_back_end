#!/usr/bin/env python3
"""
  This module provides a function to convert a key-value pair to a tuple.
  """
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Converts a key-value pair to a tuple"""
    return (k, float(v*v))
