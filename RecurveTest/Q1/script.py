def even(start, n):
    result = []
    counter = 0
    x = 0
    while counter <= n and x >= start:
        if x % 2 == 0:
            result.append(x)
            counter += 1
            x += 1
            print (x)
            print (counter)
            continue
    return result