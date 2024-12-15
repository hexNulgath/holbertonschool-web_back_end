#!/usr/bin/env python3
"""
    changes all topics of a school document based on the name
"""


def update_topics(mongo_collection, name, topics):
    """
    Updates all topics of a school document based on the name.

    Parameters:
    mongo_collection (pymongo.collection.Collection):
        The MongoDB collection where the document will be updated.
    name (str):
        The name of the school whose topics will be updated.
    topics (List[str]):
        The new list of topics for the school.

    Returns:
    bool: True if the update was successful, False otherwise.
    """
    query = {"name": name}
    update = {"$set": {"topics": topics}}
    return mongo_collection.update_many(query, update)
