import os
from pathlib import Path

DEFAULT_ROOT_PATH = Path(os.path.expanduser(os.getenv("COVID_ROOT", "~/.covid/mainnet"))).resolve()

DEFAULT_KEYS_ROOT_PATH = Path(os.path.expanduser(os.getenv("COVID_KEYS_ROOT", "~/.covid_keys"))).resolve()
