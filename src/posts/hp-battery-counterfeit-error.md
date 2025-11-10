---
title: hp-battery-counterfeit-error
url: /hp-battery-error/
author: Anush
date: '2025-08-11T00:00:00.000Z'
draft: false
tags: []
comments: {}
---
**HP Battery Counterfeit Error Fix**

If you get an error along the lines of "hp battery counterfeit error .." and you own a hp laptop where you have no idea where the battery is, and you have a UEFI based system, you probably have to update your BIOS firmware.

<!--more-->

FOR A WINDOWS USER you typically already have the utils pre-installed to update device firmware.

If you Dual boot with linux and windows u can just go to windows and upgrade your firmware

For anyone else, HP doesnt give a fuck and you are on your own.

**What i had to do**

Requirements: Docker, A spare USB drive, An internet connection (to set things up initially).

1. Use [dockur/windows](https://github.com/dockur/windows) to spawn a docker container that runs windows
2. Look up their README to set up the [shared folder](https://github.com/dockur/windows?tab=readme-ov-file#how-do-i-change-the-storage-location), and the [USB device configuration](https://github.com/dockur/windows?tab=readme-ov-file#how-do-i-pass-through-a-usb-device)
3. Download the latest BIOS-System firmware update exe file from [here](https://support.hp.com/us-en/drivers/laptops) (looked up my device id and product name, selected windows 11 for the OS and the version)
4. Move the exe file to the shared folder
5. Execute the exe file after booting into the windows docker image
6. I chose to create a bootable usb drive for bios recovery. The exe tool flashes the usb drive and loads the recovery image which you can boot to upgrade your BIOS
7. When the process was over I had to eject the drive, poweroff, plug the device back in and select the boot from efi option, and then select the BiosUpgrade.efi file inside the HP folder [it might vary for you]

The BIOS upgrade took a few minutes. When it was over the hp-battery-counterfeit-error did not show up.

**Why**

Cause I did not have a windows system / partition in my laptop.  
I also did not want to set up a windows VM and already had docker installed.  
I tried to execute the exe file using the [Hiren boot usb](https://www.hirensbootcd.org/) technique but it did not detect my wifi drivers :(

Also the many posts suggesting to extract the bin files from the exe file and move it to the kernel modules were not helpful for me.  
All I got was an another cryptic EFI file

**The stuff I looked up and didnt work**

*These may / may not work for you*

1. [Archwiki on flashing BIOS from linux](https://wiki.archlinux.org/title/Flashing_BIOS_from_Linux)
2. [AskUbuntu thread on performing a BIOS upgrade](https://askubuntu.com/questions/539120/how-to-perform-a-hp-bios-upgrade-with-only-ubuntu)
3. [A gitingest article that goes over the process of modifying the files in the EFI partition](https://gist.github.com/eNV25/c8001491dc0440656ff7b0ae18993ba1)
