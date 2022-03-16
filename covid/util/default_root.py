import os
from pathlib import Path

DEFAULT_ROOT_PATH = Path(os.path.expanduser(os.getenv("COVID_ROOT", "~/.covid/mainnet"))).resolve()
STANDALONE_ROOT_PATH = Path(
    os.path.expanduser(os.getenv("COVID_STANDALONE_WALLET_ROOT", "~/.covid/standalone_wallet"))
).resolve()

DEFAULT_KEYS_ROOT_PATH = Path(os.path.expanduser(os.getenv("COVID_KEYS_ROOT", "~/.covid_keys"))).resolve()
