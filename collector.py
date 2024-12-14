import os
from pathlib import Path
from typing import List, Union

def collect_files(directories: Union[List[str], str], output_file: str) -> dict:
    """
    Recursively collect contents of all .py files from multiple directories and their
    subdirectories and write them to a single text file with directory structure.
    
    Args:
        directories (Union[List[str], str]): Single directory or list of root directories to search
        output_file (str): Path to output text file
    
    Returns:
        dict: Summary of processed files with counts and any errors encountered
    """
    # Convert single directory to list for consistent handling
    if isinstance(directories, str):
        directories = [directories]
    
    # Statistics dictionary
    stats = {
        'total_files_processed': 0,
        'errors': [],
        'processed_directories': []
    }
    
    # Ensure output directory exists
    output_path = Path(output_file)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    
    with open(output_file, 'w', encoding='utf-8') as f:
        # Process each root directory
        for root_dir in directories:
            try:
                root_path = Path(root_dir).resolve()
                if not root_path.exists():
                    stats['errors'].append(f"Directory not found: {root_dir}")
                    continue
                
                stats['processed_directories'].append(str(root_path))
                
                # Write root directory header
                f.write(f"\n{'#'*80}\n")
                f.write(f"Root Directory: {root_path}\n")
                f.write('#'*80 + '\n\n')
                
                # Walk through directory tree
                for current_dir, _, files in os.walk(root_path):
                    # Filter for .py files
                    py_files = [f for f in files if f.endswith('.html') or f.endswith('.js') or f.endswith('.css')]
                    
                    if py_files:
                        # Get relative path from root directory
                        rel_path = os.path.relpath(current_dir, root_path)
                        
                        for py_file in py_files:
                            file_path = Path(current_dir) / py_file
                            
                            try:
                                # Read file contents
                                with open(file_path, 'r', encoding='utf-8') as py_f:
                                    content = py_f.read()
                                
                                # Write directory and file path
                                f.write(f"\n{'='*80}\n")
                                if rel_path == '.':
                                    f.write(f"File: {py_file}\n")
                                else:
                                    f.write(f"Directory: {rel_path}\n")
                                    f.write(f"File: {py_file}\n")
                                f.write('='*80 + '\n\n')
                                
                                # Write file contents
                                f.write(content)
                                f.write('\n\n')
                                
                                stats['total_files_processed'] += 1
                                
                            except Exception as e:
                                error_msg = f"Error reading {file_path}: {str(e)}"
                                stats['errors'].append(error_msg)
                                f.write(f"{error_msg}\n\n")
                
            except Exception as e:
                error_msg = f"Error processing directory {root_dir}: {str(e)}"
                stats['errors'].append(error_msg)
                f.write(f"{error_msg}\n\n")
    
    return stats

def print_summary(stats: dict):
    """Print a summary of the file collection process."""
    print("\nCollection Summary:")
    print(f"Total files processed: {stats['total_files_processed']}")
    print(f"\nProcessed directories:")
    for dir_path in stats['processed_directories']:
        print(f"- {dir_path}")
    
    if stats['errors']:
        print("\nErrors encountered:")
        for error in stats['errors']:
            print(f"- {error}")

if __name__ == '__main__':
    # Example usage
    directories = [
        '.',
    ]
    output_file = 'files_collection.txt'
    
    stats = collect_files(directories, output_file)
    print_summary(stats)