#!/usr/bin/env python3
"""
    returns the list of school having a specific topic
"""


def get_schools_by_topic(mongo_collection, topic):
    """
    Returns the list of school having a specific topic.

    Parameters:
    mongo_collection (pymongo.collection.Collection):
        The MongoDB collection where the schools will be retrieved.
    topic (str):
        The specific topic for which the schools will be retrieved.

    Returns:
    List[str]: A list of school names having the specified topic.
    """
    if mongo_collection is None:
        raise ValueError("mongo_collection cannot be None")
    if not isinstance(topic, str):
        raise ValueError("topic must be a string")
    query = {"topics": topic}
    return [school["name"] for school in mongo_collection.find(query)]
