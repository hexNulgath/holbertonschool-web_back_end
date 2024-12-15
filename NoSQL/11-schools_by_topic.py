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
    query = {"topics": topic}
    return [school["name"] for school in mongo_collection.find(query)]
