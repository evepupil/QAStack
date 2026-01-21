"""
Crawl4AI spider to scrape testdev.tools website
Crawls the main tools page and paginated pages until 404
Saves results as markdown files in the data subdirectory
"""

import asyncio
import os
from pathlib import Path
from crawl4ai import AsyncWebCrawler
from crawl4ai.extraction_strategy import LLMExtractionStrategy
import aiohttp


async def crawl_page(url: str, output_file: str):
    """
    Crawl a single page and save as markdown

    Args:
        url: URL to crawl
        output_file: Path to save the markdown file
    """
    async with AsyncWebCrawler(verbose=True) as crawler:
        result = await crawler.arun(url=url)

        if result.success:
            # Save the markdown content
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(f"# {url}\n\n")
                f.write(result.markdown)
            print(f"✓ Saved: {output_file}")
            return True
        else:
            print(f"✗ Failed to crawl: {url}")
            return False


async def check_url_exists(url: str) -> bool:
    """
    Check if a URL exists (returns 200 status)

    Args:
        url: URL to check

    Returns:
        True if URL exists, False otherwise
    """
    try:
        async with aiohttp.ClientSession() as session:
            async with session.head(url, allow_redirects=True) as response:
                return response.status == 200
    except Exception as e:
        print(f"Error checking URL {url}: {e}")
        return False


async def main():
    """
    Main function to crawl testdev.tools
    """
    # Create data directory if it doesn't exist
    data_dir = Path(__file__).parent / "data"
    data_dir.mkdir(exist_ok=True)

    # Crawl the main tools page
    main_url = "https://testdev.tools/tools/"
    main_output = data_dir / "tools_main.md"

    print(f"Crawling main page: {main_url}")
    await crawl_page(main_url, str(main_output))

    # Crawl paginated pages starting from page 2
    page_num = 2
    while True:
        page_url = f"https://testdev.tools/tools/{page_num}/"

        # Check if the page exists
        print(f"\nChecking page {page_num}: {page_url}")
        if not await check_url_exists(page_url):
            print(f"Page {page_num} returned 404. Stopping.")
            break

        # Crawl the page
        page_output = data_dir / f"tools_page_{page_num}.md"
        success = await crawl_page(page_url, str(page_output))

        if not success:
            print(f"Failed to crawl page {page_num}. Stopping.")
            break

        page_num += 1

    print(f"\n✓ Crawling complete! Saved {page_num - 1} pages to {data_dir}")


if __name__ == "__main__":
    asyncio.run(main())
