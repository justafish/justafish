---
title: Upgrading a Turbo Trainer to use with Zwift
---

I was kindly gifted a bike turbo trainer from a neighbour during UK Lockdown #1,
which was great fun whilst the weather was nice and exercise time was limited.

![B'Twin bike on a TacX turbo trainer](/images/blog/turbo-trainer-garden.jpg)

It's a bit harder to cycle during the evenings now the days are shorter, so I was
quite keen to give the virtual training app [Zwift](https://zwift.com/uk) a go.
Unfortunately my trainer (TacX Flow Multiplayer T1901) doesn't support any
"smart" capabilities, but it does output data to a head unit so I wondered
whether it was possible to grab this on my computer and relay to Zwift from there.

![TacX Flow Turbo Trainer](/images/blog/tacx-flow.jpeg)

Fortunately I found a project on GitHub that has an [extremely thorough breakdown
of TacX hardware](https://github.com/totalreverse/ttyT1941/wiki) and some code
that controls the motor brake. I stripped the end off an RJ12 cable, added some
DuPont connectors and plugged it into a cheap [CP2102 6 in 1 USB to serial converter](https://www.aliexpress.com/item/1005001510943320.html?spm=a2g0o.productlist.0.0.55d566a0yMqaav&algo_pvid=269039b5-5cbd-4e5e-adf2-f222049e69b5&algo_expid=269039b5-5cbd-4e5e-adf2-f222049e69b5-0&btsid=2100bdd816061658116438940ef458&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_).

![CP2102 serial converter](/images/blog/cp2102.jpeg)

I had to hunt the internet a bit to find out what to set the dip switches to.

![CP2102 dip switch chart](/images/blog/cp2102-dip-switch.jpg)

No additional drivers needed on Ubuntu 20, plug it in and you can see the kernel
module loaded.

![lsmod showing cp210x driver loaded](/images/blog/cp2102-lsmod.png)

Everything was looking good, so I ran the python script included with ttyT1941
and I got... nothing. Uncommenting some lines in the source for some additional
debugging information didn't yield any further information.

![Terminal showing errors](/images/blog/tty-fail.png)

After that I tried a few different tools (minicom, interceptty, screen) to see
if I could see any data at all coming directly from the device, but they all
were returning a blank. I re-tested the cable with a multimeter for connectivity,
and checked that there was some current on Tx and Rx pins. Unfortunately that
reaches the limit for what I'm able to test as I don't have access to an
oscilloscope.

Off to eBay where I was able to buy a cheap T1904 green head unit, which should
be capable of controlling the motor brake. This head unit has a USB-B output.

tbc...






