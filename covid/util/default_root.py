import os
from pathlib import Path

DEFAULT_ROOT_PATH = Path(os.path.expanduser(os.getenv("COVID_ROOT", "~/.covid/mainnet"))).resolve()
