#!/usr/bin/env python3
"""
Helper function to calculate the start and end index for pagination.
"""
import csv
import math
from typing import List, Tuple, Dict


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Calculate the start and end index for a paginated dataset.
    Args:
        page (int): The current page number (1-indexed). Defaults to 1.
        page_size (int): The number of items per page. Defaults to 10.
    Returns:
        Tuple[int, int]: A tuple containing the start index (inclusive) and
        end index (exclusive) for the items in the current page.
    """
    start = (page - 1) * page_size
    end = page * page_size
    return start, end


class Server:
    """
    Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """
        Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(
        self,
        page: int = 1,
        page_size: int = 10
    ) -> Tuple[
        List[List],
        int,
        int,
        int
    ]:

        """
        Get a paginated dataset.
        Args:
            page (int, optional): The current page number (1-indexed).
            Defaults to 1.
            page_size (int, optional): The number of items per page.
            Defaults to 10.
            Returns:
                List[List]: A list of items in the current page.
                If the page is out of range, returns an empty list.
                Raises:
                    AssertionError: If page or page_size are not integers or
                    if page is negative or page_size is 0.
        """
        assert isinstance(page, int) and isinstance(page_size, int)
        assert page > 0 and page_size > 0
        start, end = index_range(page, page_size)
        dataset = self.dataset()
        if page < math.ceil(len(dataset) / page_size):
            next_page = page + 1
        else:
            next_page = None
        prev_page = page - 1 if page > 1 else None
        total_page = math.ceil(len(dataset) / page_size)
        if start >= len(dataset) or end >= len(dataset):
            return ([], next_page, prev_page, total_page)
        return (dataset[start:end], next_page, prev_page, total_page)

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict:
        """
        Returns a dictionary of hyperlinks to the given page
        and page size in the given page
        """
        data, next_page, prev_page, total_page = self.get_page(page, page_size)
        return {'page_size': len(data), 'page': int(page), 'data': data,
                'prev_page': prev_page, 'next_page': next_page,
                'total_pages': total_page}
