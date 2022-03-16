from dataclasses import dataclass
from typing import List, Optional

from covid.types.name_puzzle_condition import NPC
from covid.util.ints import uint16, uint64
from covid.util.streamable import Streamable, streamable


@dataclass(frozen=True)
@streamable
class NPCResult(Streamable):
    error: Optional[uint16]
    npc_list: List[NPC]
    cost: uint64  # The total cost of the block, including CLVM cost, cost of
    # conditions and cost of bytes
