"""
Extract tool information from crawled markdown files
Parses tool entries and consolidates them into a structured JSON format
"""

import re
import json
from pathlib import Path


def extract_tools_from_markdown(md_content: str) -> list:
    """
    Extract tool information from markdown content

    Args:
        md_content: Markdown content string

    Returns:
        List of tool dictionaries
    """
    tools = []

    # Pattern to match tool entries
    # Format: [ ![ToolName](image_url) ToolName Free/Paid Description Category ](tool_url)
    # or: [ Letter ToolName Free/Paid Description Category ](tool_url)

    # Pattern for tools with images
    pattern_with_image = r'\[\s*!\[([^\]]+)\]\(([^\)]+)\)\s*([^\s]+(?:\s+[^\s]+)*?)\s+(Free|Paid|Freemium)\s+(.+?)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)\s*\]\(([^\)]+)\)'

    # Pattern for tools without images (just letter icon)
    pattern_without_image = r'\[\s*([A-Z])\s+([^\s]+(?:\s+[^\s]+)*?)\s+(Free|Paid|Freemium)\s+(.+?)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)\s*\]\(([^\)]+)\)'

    # Find all tools with images
    matches_with_image = re.finditer(pattern_with_image, md_content)
    for match in matches_with_image:
        tool = {
            'name': match.group(3).strip(),
            'image': match.group(2).strip(),
            'pricing': match.group(4).strip(),
            'description': match.group(5).strip(),
            'category': match.group(6).strip(),
            'url': match.group(7).strip()
        }
        tools.append(tool)

    # Find all tools without images
    matches_without_image = re.finditer(pattern_without_image, md_content)
    for match in matches_without_image:
        tool = {
            'name': match.group(2).strip(),
            'image': None,
            'pricing': match.group(3).strip(),
            'description': match.group(4).strip(),
            'category': match.group(5).strip(),
            'url': match.group(6).strip()
        }
        tools.append(tool)

    return tools


def process_all_markdown_files(data_dir: Path) -> list:
    """
    Process all markdown files in the data directory

    Args:
        data_dir: Path to data directory

    Returns:
        List of all tools from all pages
    """
    all_tools = []
    seen_urls = set()  # To avoid duplicates

    # Get all markdown files
    md_files = sorted(data_dir.glob('*.md'))

    print(f"Processing {len(md_files)} markdown files...")

    for md_file in md_files:
        print(f"Processing: {md_file.name}")

        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()

        tools = extract_tools_from_markdown(content)

        # Add tools, avoiding duplicates
        for tool in tools:
            if tool['url'] not in seen_urls:
                seen_urls.add(tool['url'])
                all_tools.append(tool)

        print(f"  Found {len(tools)} tools (total unique: {len(all_tools)})")

    return all_tools


def save_tools_to_json(tools: list, output_file: Path):
    """
    Save tools to JSON file

    Args:
        tools: List of tool dictionaries
        output_file: Path to output JSON file
    """
    # Sort tools by name
    tools_sorted = sorted(tools, key=lambda x: x['name'].lower())

    # Create output structure
    output = {
        'total_tools': len(tools_sorted),
        'tools': tools_sorted
    }

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(output, f, indent=2, ensure_ascii=False)

    print(f"\nSaved {len(tools_sorted)} tools to {output_file}")


def generate_statistics(tools: list):
    """
    Generate statistics about the tools

    Args:
        tools: List of tool dictionaries
    """
    # Count by category
    categories = {}
    for tool in tools:
        cat = tool['category']
        categories[cat] = categories.get(cat, 0) + 1

    # Count by pricing
    pricing = {}
    for tool in tools:
        price = tool['pricing']
        pricing[price] = pricing.get(price, 0) + 1

    print("\n=== Statistics ===")
    print(f"Total tools: {len(tools)}")
    print(f"\nBy pricing:")
    for price, count in sorted(pricing.items()):
        print(f"  {price}: {count}")

    print(f"\nTop 10 categories:")
    for cat, count in sorted(categories.items(), key=lambda x: x[1], reverse=True)[:10]:
        print(f"  {cat}: {count}")


def main():
    """
    Main function
    """
    # Get paths
    script_dir = Path(__file__).parent
    data_dir = script_dir / "data"
    output_file = script_dir / "tools_data.json"

    # Process all markdown files
    all_tools = process_all_markdown_files(data_dir)

    # Save to JSON
    save_tools_to_json(all_tools, output_file)

    # Generate statistics
    generate_statistics(all_tools)


if __name__ == "__main__":
    main()
