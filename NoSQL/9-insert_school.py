#!/usr/bin/env python3
"""
    inserts a new document in a collection based on kwargs
"""


def insert_school(mongo_collection, **kwargs):
    """
    Inserts a new document in a MongoDB collection based on provided kwargs.

    Parameters:
    mongo_collection (pymongo.collection.Collection):
        The MongoDB collection where the document will be inserted.
    **kwargs (dict):
        Keyword arguments representing the fields and
        values of the document to be inserted.

    Returns:
    dict: The inserted document.
    """
    return mongo_collection.insert_one(kwargs).inserted_id
