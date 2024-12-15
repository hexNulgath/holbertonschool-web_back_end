#!/usr/bin/env python3
"""
   List all documents in a given MongoDB collection.
"""


def list_all(mongo_collection):
    """
    List all documents in a given MongoDB collection.

    Parameters:
    mongo_collection (pymongo.collection.Collection):
        The MongoDB collection to list documents from.

    Returns:
    List[dict]: A list of dictionaries,
        where each dictionary represents a document in the collection.
    """
    return list(mongo_collection.find())
