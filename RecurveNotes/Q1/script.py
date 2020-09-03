
def even(start, n):
    result = []
    if start > n:
        return []
    for x in range(start, n):
        if x % 2 == 0:
            result.append(x)
            print (x)
            print (counter)
    return result