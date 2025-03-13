

## Debounce vs Throttle

![Uploading Screenshot 2025-03-13 at 9.02.33 PM.png…]()

Throttle:
within delay, if the func is invoked, we don't execute it and it is ignored.

Debounce:
within delay, if the func is invoked, we see if there are any setTimeout ka CBs that are yet to be executed, if we find any - we clear them and add a new callback to the queue. 
