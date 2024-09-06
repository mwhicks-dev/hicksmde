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
    future = future.replace(hour=23, minute=59, second=59)

    while future < datetime.now():
        curr_day = future.day
        future = future.replace(day=curr_day + 1)
    
    while True:
        seconds_until_future = (future - datetime.now()).total_seconds
        time.sleep(seconds_until_future)
        os.system(script)
        curr_day = future.day
        future = future.replace(day=curr_day + 1)

if __name__ == '__main__':
    main()
