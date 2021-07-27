from typing import KeysView, Generator

SERVICES_FOR_GROUP = {
    "all": "covid_harvester covid_timelord_launcher covid_timelord covid_farmer covid_full_node covid_wallet".split(),
    "node": "covid_full_node".split(),
    "harvester": "covid_harvester".split(),
    "farmer": "covid_harvester covid_farmer covid_full_node covid_wallet".split(),
    "farmer-no-wallet": "covid_harvester covid_farmer covid_full_node".split(),
    "farmer-only": "covid_farmer".split(),
    "timelord": "covid_timelord_launcher covid_timelord covid_full_node".split(),
    "timelord-only": "covid_timelord".split(),
    "timelord-launcher-only": "covid_timelord_launcher".split(),
    "wallet": "covid_wallet covid_full_node".split(),
    "wallet-only": "covid_wallet".split(),
    "introducer": "covid_introducer".split(),
    "simulator": "covid_full_node_simulator".split(),
}


def all_groups() -> KeysView[str]:
    return SERVICES_FOR_GROUP.keys()


def services_for_groups(groups) -> Generator[str, None, None]:
    for group in groups:
        for service in SERVICES_FOR_GROUP[group]:
            yield service


def validate_service(service: str) -> bool:
    return any(service in _ for _ in SERVICES_FOR_GROUP.values())
