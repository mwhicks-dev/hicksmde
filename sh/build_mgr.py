import os

import time
from datetime import datetime

script = """
cd ${HOME}/git/hicksmde-mapping
git restore .
git pull
chmod +x sh/*
sh/reboot.sh
cd -
"""

def main():
    # initial startup
    os.system(script)

    # setup time stuff
    future = datetime.now()
    future.hour = 23
    future.minute = 59
    future.second = 59

    while future < datetime.now():
        future.day += 1
    
    while True:
        seconds_until_future = (future - datetime.now()).total_seconds
        time.sleep(seconds_until_future)
        os.system(script)
