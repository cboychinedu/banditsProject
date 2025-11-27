# Importing the necessary modules 
import logging

# ANSI escape code for white color and reset
WHITE = '\033[97m' # Changed from 92m (Green) to 97m (Bright White)
RESET = '\033[0m'

# Custom Formatter Class 
class WhiteConsoleFormatter(logging.Formatter):
    """Custom Formatter to color the entire log message white."""
    
    # Define the format string with color codes
    COLOR_FORMAT = f"{WHITE}%(asctime)s - %(levelname)s - %(message)s{RESET}"
    DATE_FORMAT = "%Y-%m-%d %H:%M:%S"
    
    def format(self, record):
        # Create a new formatter instance using the colored format string
        # Note: self.COLOR_FORMAT uses the WHITE variable defined above.
        formatter = logging.Formatter(self.COLOR_FORMAT, datefmt=self.DATE_FORMAT)
        return formatter.format(record)