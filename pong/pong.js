const settings = {
  DOT: 0.5,
  SPEED: 2,
}

const theme = {
  PRIMARY: '#7DCE9A',
  BACKGROUND: '#211020'
}

const getSize = size => {
  return `${size * settings.DOT}vmin`
}

const beep = () => {
  const snd = new Audio("data:audio/mp3;base64,//uwYAAAA79OxlUYYApXATjJowgBVaDHD7nXgAH5F6K3NvAAAAq9MySWgBpsCAAIIIQndkyZMndoiIiIiC3d3d3dAAQiIiI7u7u7ugAACEREQDA3cDAwMDFgAAAAAAAAAAIAwMDAwN3d0RERERHcOBgYG7uAAAAAAAAiI7i3d3dwAARERER3AwMDAxbuiIiIiIBgYG4eHhgAAAAAAAUIs1YEEIeyZMmmQiIiIiBYeHh4eAAAAAAYeHh4eAAAAAIw8PDw8AAAAAAw8PDw8AAAAAAw8PD04AAAAABh4eHh4AAAAABh4eHv/gAAIw8PDw8AAAARQIBkbVtNd9bK1CSAAAd8iWYOg8ZMggneMBANBSsiBWRwhOJlAGAUMCBSDcoo/YDsLcki2pxrCuJCS0khLzgQKHuROTCIwl3FqOtRp9MpYvqFnSOk1EEzsY+Hjt22IaqZ4UaHHXE0zBJjD2tKNkSPXcj6D61xXM1fAbZLP4sIoKi4iYKFyKBUEwZAgXdPQacRrpOW9YdYNEQcoUpuy0mKNetBtATLnl/7//6txpeAjGB8O023i1ibIIAABoVKaASiSNDyfTTUBr2PDVk21lFtssoH4UIA97HDjmimDmjR2WfMQ0opbVlXNagZFHHQ7LOeUx+qGFDrPqJretMDY7hvcyxNtcF5TOcQrYzjO7WprN651LQVKMKyFG+AHpKdi/b+v/9H/Yuxt////uSmIKaimZccnBcZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+7JgAAAF1WZU7maAAGIxCkDHqAAZWV1bubyAAZQrrbceoAAAYj8fr+/0ej4fj4fAfm0+K5txmKk67jzEDHEQBtKTN9YYQfdh5WPCdCCaj7uTgXQExbrprDlwFC4XwCyj6bJpwMaBEbB6gNnwbr/s2moBQWCIAGXxbwMqHD1/7Hk/C4MDUCg0UBQWAEcHCV/+/08MABthaIwMiCcA5cQnFL//2a3qD1w5MLKwBhgaiAwDAwQYDFBgswHrjn/////jjICGNw5cLgA1QSApAPkIgRQihoQMQv////5+6QD+8FweAUCeapBeIA1f4niRPb//9jJ//zGFgj//JxbKFhEDn/+TgCAKgsCHt//+TnuQDyIgRAsf//+IcYCwcFwDQDWPz5/////7mDwkG6GOZMU9T/////////88eEjzGJzzyRgAAEQwIBQKBQKBQKBQDBAY1NAa24SPqjZhaqfIMGJxp1rKZgRnRtwKYhYBGhNTz90DNXbvWe+5BhGDutx6l49uTgf8OlTDhJWTe+Ltxw9u5eZQdmRdXGOzuPP5r/XYrammVnlnlT8/CzvHL63/4EBi78ruL+0VTfNWr+/1z+f/0q8YyzpnUPQNPoJv1/8/7X//////uO6aPCP6IKPyOjdWfyp+t2Yzllvu//dXGr9bn///SUk0/0tfOWQ9nVhD91JfAvOq/+aVSO/xYAAAgQDgcDgcDgcDgcC0Te9xssj41T5HXj0++anmkQidawC6kpY7txcXHoxN/8QQ+EUIERQx//MECPCQUk7f/5MQoXGI9PJB///+Ph8IsSQlCELCyYa////kR5hMxrk49JDSV2IkxBD/+7JAAACEZ1rV720ACpKMuoruIABSkZtJrbELqlUy6GnFpbkIAAJ0KWtpbw7KoGjFyRv4s8vIY5fuxCmIvrO3O/Ac1t6/k0HYjB0cV5agRbad6UWakJuLRlzhWKgsJAGjRidRESWOsVdtrsOgdJ7r/r5zYTpbWHqOqh5Hcykjg6OAKoenoLE0TQdDbUHRyB848VNMKuuJNqVFBKOURRpjTWsTWIALYWD7rYBRN2aLxcoAAyAxttfvS6T/vg7zjp3EQOEgaYMupioExlAC7MJlXcRgezHxPQPCGaUHQKAiFqVVN6/cw4IA+QejNDc9fK7kg3DgZFWvNkHDdv4EoJA86rcTU8/bOKtF0yo3tPI5omEKYfBPNxcTYuQbSCNYkOMDoTgKlN3A0chzMPUlBYftySk+HQqOWOUNko6qqG1faxWWFgAAAGsi2SiZ2wLxW9HZM2yqRIFlBAaVbk5OLBI/Ghse3QuTf8eZae+ipsxLIw3MWsLZiS5pQsIY7ss7/UqVr+AuDgZE2s1eK7lCw6vGgoBaSf+01c11CU9xf+z+23wqChYsPDw4OxBRw9IGpQ5ZCYP1GCpJpy1LP40dYjCo1UtIY8zdbth1UOYwLuy8xfv2jSo0dCwIRATAaO6A+fbdFFqA0AhABCUbiRtNhYErlYsLVJOrIi1EkNNrvqHcwPRPgYgRRcte9Zk8bytr9xIUXr+aSv/OqFQzsa3+ebx5nct5wUo8Ui1SGdV/7/1hm5V4e8uOfPHKklNS2VrPfET+VJkMNXGGhk9MYJj9Og+Uk0qXnNEmQf5lYIWe7kCCCJaCz0t8/a2+dePTiwwmIKaigAD/+7JAAAiEdF1P64xDQI0Lug1x6FoQuVM3rq0tQfyqJ/WOINAAAAE5FMlR/CQ7GgGXJdguwPAOGgsFyYGmTKAcHCgcEVzUjrXXO+cz63mdnanJlclADneYxQsdSzWxykjkZv/WJM/hwPBsK1S1rxUVZvlFDQbCf/75baOjxEVp5/YZF0Q+yOwq40oToWk0rqIYiHztTiAHxQcu8MdJKSVUiKpYi1fcWadepQqteS50l2NSsAAAJcBJJtbDQ3SfQk+XoT7VWCgjMOBUytdDmYcBwpFuQ08mtXPbMOtxqv5f6/LpIijjf0sDUOjmcgPvFh/7XKWyXuNCESOLGkfpESWSHtSyYLhaqvhar4iakak7S1+lV8/8CodCdQbIdxHAlCGPHiqh2KWLWlRdfUwPPFVg4mLNmCanxa7lc6XIAW15oNwAwlycEQ/l2EGWgKbrfDACHQUCBeMgZMMOw0CwExCnjwNwavMDfPHb/hyRAEkUja9u5KIb6m6bjToInf5XY3K/gdAkhFVRy//K7adnvJLEhLdx931v/VqQxz/s/XlT7pY/XamqZDyFlVlAgD7DSrIVSJsUgzptlFQFK+7Vis9VaLSWLNIDvAdckvod5lDW2GNhWMi0FlDQ2Mu7IwiIElZRuaCMwkXDi0asb/coGQCif44LFmZpoaKWHmQM61bqUW9Q5FAAYlBqrLe/aoMr1ICUMgLG61Hw3DfLkx8/z6rT25pIwWIBsDIqLA6HxZrdBcQkx6FyKjxoNQ84//s6y5IYOtv9aYgpqKZlxycFxkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+7JgAAgEmVXNe1xiCGWI6bxoSGdUWUMt7HHmqbcj5zWWoWwAAAABWDMiSSgFoynmBRgkDoOCMKZgUb1of+YcMBQKGQMAJOm0SdWdLX2yZVLm6vXnBcKRpH93OY5fx77VYU5YKqxc7k251VmzM24G4MlDu71qVhXFllbFOY0PRxyj5vM71vrS0C5x2ev/THelbVQovtfOOYqsE5cJ5+lgbw6K9J+qVMWktbo5frDP7X56CLtWuu4AAABaCxYgHG2owZDz2vA8iT6aIOKEYZ1ZFS+V4wCrrG+FFRAAw3lp1n4mkQPQ/Ykuv+Lu5bw6BsEIj1HHbdDZpvkkUH3cf+6PaMzKIQ6I/6tv/vyhqVrZdc1amRNBT9itW/5d3GgrQJcbcbCAcEsA1kUgEZREUMC1iQQMXe03UUS5Rd1/nBBhMh+E5K9ghIg633r7QW1gjl+hT+ExZiacsY1AjWa07EZbvZcXvmLCknzWCMIkYccVRVT2aOb56iYZ1MTuBBXKYM8+DprE9raveF7Rob18l4auo5QvMn366c4UvZu9bcMrtcmq5PCHJZ+aUGsVOkoP+FrzT57+Fatt6znWIwWbiniBAABXVTNWRgoGb+1LZRL5e/qwYVkImqUypXnDK7p7pImpssS0O4WCaIx5YvJZ+QdJQ4fAt/sVdf8CIMZaX6ibU2Rk21gqE4AbhvuMi9+Q/Gv8vWRm3XKvJuJDyiKKD0sWQarDwfNkH2BWvuBZdaYgpqKZlxycFxkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+7JgAAAEuUvK64ZlqmNo+TllaFoUCTElrb0x4bYjZTWUmfgAgAWeLWKSIDRVSVh5w5UrcXmEhGEDg0tLzOYjWqyeHMHgcfckp7NPJ5rcxRY3M47jAT8DwE/ACk08YTCtGnAYCC0XvjkqncRJk69EWQJB0Ra5WZ7cWLNbZi/kgjgzAVdqYaPfVYh9A5xWPSwzQ5fd7YThDbcQmo2qQFY7KxGMR/8Tj8zfU6aAeCYiord80dpca78I7lpdAAA4ct6Bqy1E824vG06cVmEY5p0K8V0WlyFtl6P988aSZJHaBkDNdk05sGxeg4uTmma6dVv/LgIHFU2+vuzyn4JFxADwdU/37XPNy7REK/ddxLozxSIWPFbRkZzaPMUYTv0egAAASWK2yREB3AoAu9MlCl4nUHCUxYTM+tD5QQIBE1ozKuQE6EnooGqK1fUsR7aRaV5/E6BGS7xKHktMKsWV6M7a9qVoRy1I42UqEz5niKi7/LxnY2ATceKgXTCyO2qWIqznJNGVLi/g4jKEkiaWJKatmCymRPLiOI2NCnSVtUxNZ5AIxXcGV29WyT22U7BZd4vbbArvpuhfbrE0sJGymHQQAGbEZZdYgDtlaI08T7N1ooPdsA0uI09tZqrnvNUkktNH4+os4QkI+rtoFox8JfwWP40gLGmty8tZFXhTkYeYElUel1peZAjVJd1CRN9qTY3O/d8OLE0/18jnc43PXoqq2f08XjttJBB1Zmj6kxBTUUzLjk4LjIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+7JgAAAE+0xFM6wdwmbm6U1gzFhTZS0frbzXKWsYZXWYJQwAgrSAbeAyYhBeAgNC4PkILg4NSIPjCgCjAYBTE2nDNcDjAoHVNoi6D7yZvHliFqOUd/PvKt6cpopDWKQXKx7Bzik88yWvL1Exx381jl3DnOsz3e0OYbCSHSDTLXy9n1albFrlVhtETbRbrrz1xjRlrMzA1cQpi70rCrfJQA1FEw1FhVb8sQw3qMwX7dSR/meXjsqHEhl77Nrm/tWH1q5AgACqW67WtAUJC49EZXjyC2QhRo9est9DLZ78sfGKY4GBSsNY/mDldddpBLdM7Kr6MHL/1WvRXWQJKw0layRzA9r30e2FZsD1+yOBppicy+xb2zO7azbb3Jqvl93bxpbbXOsQIa5/AEAAbnbdaiAcsBgokGhdaAKCEyFgQgAMRJDQ04IrUY3IymYBpn+bE4ksrySIymDb/bvPWHKoSxBuUcvLDW6ZNqFlbcyppRHm35gqZvYEk3NjW0pmIvN6yiC+GumDHZVuMh0BnhzbLiUzE5McuJkiUCF0rqF4di/exqQJWshuZbpoeI3cPL7HbjRdWXGgVsUeR9/eccVyFojmxr+AMAF7Jba0kAj8fWeybg0+Ww7AIoUBam3NJtEQ1TUEVf1CkxSRN3iBthuEynTqLlXH1jzeM3Bn4psE6JxK10N4o/ZrMlF4xytbberVZarfiFGxb0IVJsUaS8G2piCmopmXHJwXGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+7JgAAADpTDJ6y9i2lmlmT1oyVkPNNchrLBvykij43XGDxgAABOby7WogFuWIXFPNtDrdmHDggxaGiv2szsjOp4yIUs9FmjIrlY5KpXOFlaRtxh5leYIUbtl8MJbWlNZdNm9WCz6mOGj9IBGD4/JLLyiG1nJM1xstyjpx+GKmlJu3X8eC4LGfjIN/cb4tRMod2pi2r+p/qgAAFm1bWNAAr/ZxC1bl2U1Gx1A1yrRbhcU/2Skn1BdiKScJjUcNUVICl2womlJGcbVVXWlTkL7jnRMnRU2fSr36jb1NyW7DuD4lSL6WFTYQCgqKcrBd9ZsegEABp27fexoF1AeXKmkQ6zaJOMmIIKR6Wmpn9j0Yv0ZFSUO6oaV4qRJ1TBPOg5Hw5gOiuuK6tWqbTPmTAlqVaAgsZLLhfOjlt6D4kI7D8OCSxptZsnDAT0AFco4QYh64+IbK/q1HNfGo3vThWOoCe6sJAAb9vm/d9/4EAAYo7/vY0DiwHIga6bPZ2HI0155hIDkxMyfiNYPrfhUsnL3X33P6paSlm442SGl2rapK8F4MidF94TKZ1e0Po6CCdD8EolQnqY/dQlrY/lu5yjKgXl8BAhk8zqTRSeiWAtLaOBO7c9NoFOUo0848dKhmCMHgQpHBh9RCKSDOpMFGGqoTaoYlhSHjlcOpFaxDUlMQU1FMy45OC4yAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+7JAAAADxSvF03hKAFsFKU1lhk0QFO8frTDPwjcmI3WGDqgAALG24iAD+BQyEckK7yYKaStVZjCBlnNwXiBM6hJiIkCbLDzqhpm2TqiINAYWEhkUEJ1YeXm6+iONqlUC01XP6acXwy67iEAgMQRjJehGhc3c9+SVBJqxQm8TPDYQDglHLETlTusUda8oRINXQQmPJ67fwAl2pG9QZIEl12usRAB4yiMlldPT43nqfAIoIC0rouPLTqUtnhm+vZhafJhKwl7ciLtEEkqqW9ulE/HKsggiYrUYwChIOjJVR4MHrxhUcAyI40lUeXQMHILVppWUpYiaUACApNb9/o0CnyhzZq7CmrVorBboBY2mfUkUZj0HvXSDmT2jOIqll8fuJpqcCSenSGlSjpLphYStNYH7jlnqiX65k4BjAboQhc3d5cJZNcXlEkMlmDzh5edBRk00EwpI0JEYnEfHttnv7Kn5WxWHOdOhkETwGaRSoY48A5m1Gzr6gAAI7tP/9GgBrKxq8epyVqN5gltA616da7sTl9lMOLZcOzlhAa9JW/c67q6ohdsFC0hlmp6JpLPyWvLkcAVrzheOw+kht0tLjohHFn1Y4qHLkAcznEBJAsLQ5l0YCtlT9l7ZwtcJyhy7cFtD1hIgCwTIpmzkbs4WCcZtWUzVXMUx0hLumfG6Jne+keKf6kxBTUUzLjk4LjIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+7JgAAADtThIawwcak9E+Q1h5gwcObz+LmGLQbgdZDTxpZAAoB23XXVogAbjDGfNktLdgRlssbUmXSvPNy261uWr+cZ346cFxaiVFXkZmVYASO2YDRPQjrEB/XYroftLmXfZPDqNEfpzk4rRafJF3DeBd792Du8AgoSSLrkWUpB0+rqxEKwcBbW3GwFmkauFLGMmb/fP/4P+sAUQ2o5LrGQDwNgUJqbJ2ZTr6IF9tlcKxlSytEWyXNqI04809CTZ6jerqyULo4cBEZ3ejJiMGUc/IEoOz8ty7Q1oeKCEYuyhLHn0KT2tz9KwHQMma2H5iYKGEBaLNgw+HRIfhwGFkEYymhpcTCw5LUUBxgAikrwKEa2iwr+MrnLlO7KJIq99Ex2uzyVzGndet5B9DXRYGA4lvyZAcjkYn7ZKWk9W0YnQHRkI7RiOZAHoF3TQmFAfw9dFRyPjjxDNGSU42aFY/0vLkJ1c+pYSoUxvLDU+c0fU6lSuiQ4TiNEkOSkdKFbMLw7ob6s+KR2I5KQpNU/FQqmSuyfSkjPlK5PlapVqV/XNs+oToV/c9w5VqXX6svJTCrZ9aGC9IPOavyynaZif3M31K5Ser7MWr77IAgKCf3/+rQDpE2OlOmjCJqcLwmR5Rd7dnzDHEtQKngTLB5EVPJMYLAiID4bJRZGsVblpUJKErbCx1lwsJdXhJC3MlMqoxAugLoi6QjaQqStR3KS+Ve2lW1uQ3NhtSxu50oBaTMOJhZ4NoVpZ/3piCmopmXHJwXGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+7JgAAAEaTzGa0wdwlClOP1hJk4R8RsXrTB1Qb0d47WGDfkIAAGO6/+tIGN6hjdrkYSiSiiylESCpxr0ulkM0zJInALG3cilWPWZ+LzkNSR3oOdKRsygVkMek+K9UDWnR+NiAuI4dFYvmwwEOIvlJFggFQHiGaDuSAxaGawRGy8RdEJScGynkXZHXSzjOX9t2hZcb0NjW2ZCpcGZum4TTQOgAi0gRt/Zv3+vQrt/7/4AAEGZHbbEQAl0DXIGgzkhhiPQQqzFiDRW5S2UvBdhMqxkIE2LxXCDQlWdOkBNoyJCdSeCitIJRNtUomqTBmj25a4wspJkLHAh/QnYS9ijTLgAgEZft/q0QdFwLjwMFbQua7yUCYjIE9mKRtTGAGUx19XqTwft1mvW5PyldGG3aa2k0IBSbHsCY+nCkogWLig5JwZBSDERagXFB2ekJIHxNHwhIR0FpUQ3icgmQ9q0a3H1bZPhPl+bSVKpKXSbRq0craQm9M87DJy5R04XP/XJ0IqWyk4yTA2daZG1yqIz+4AttGze76xkC6qzk0j40ELe1psbUY5NUnKWmyHtosbAkh8/dQxKNC2VSyUVx8tpe2TLidEaIaqx++fslpgrFhYNCgxaa9iArm1zu9+jgYLi47Jhh5FAwrXU9jy9Qy7zom9mY7TxAWFnW3Jt3Vv//aTEFNRTMuOTguMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+7JgAAADhEfH6ywb8F1lCQ09Jk9Ywa0FLjDYybqWYzWWGbgAEgx2/f+xoHy4iokHC23T5m3Blb1vLAeEem51rbtlIqGxNSqTFDUe8TVtiabNrRxUXfY1o6jfKjdEM1EiT5S+UFhNqXHUR2vgyBcNLlkBrvfTLc4QQtSVbBT/bCIp5+s/Yv9UtN5rkS4qN9/sE0/50AIpw3zXRkABCjgJZcviyhbI2KEFzgpaQjxJ8hLSJEgL4sODwJkY2S6TLh8R2bQCoeEL2cvpPx7pkgjE/HC4PO5I+d2FE6s1CpACZ7hxG3//fgFHH/Ux/2x49HG/9gAAE1yAHuXqcOGQKApiADgIjmABKVQMJAAtkYQCJYCpgoAI1LhyY4gTUGT9Zay+hf1sT+StxI9EYQ0OCYHhTlS6BnQgSArrQJZDdI4XDFUdHI1rTA6XeHCGf3FYGRMuBYeIQrAyO4foxBXmbpMioIRcrzmNYclZyBx4qR/ZsLhyHtDOSY9Ky2NPRc8Y9ntbEHxAsiR9qkoPYO+KGptwM1NCNiCPZhluj35WH5TH4dvKvy9Sj370nntSnUm78PJfRRxZIzILjAksxN2zatkA9QUvXwhtc8flUNv+/D4ULiyd1X+h5HVDnIWDtkUGp3CiQScYO0Xn/KTjKJywuMD06VNmCRKvO0xilLpLLReOVAGncAxZcM6GBIHkJM2GyEmtFQEkyZQHwgeEgu4kZZsadF7Ve/T+tMQU1FMy45OC4yAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+7JAAAADEy1H7WUgAH1I6ImspAARWMUbuaeAAo4yoZc2wAAAEgx2z/axAAOd1X6jsGSOX08auxqgryykm41XFSJTBSKiQjmwJ0Qogyhx8jYoSFkkJXcRMBU2coleQ11GiEtOCHHUqVZqq9F5mWV7S7fe748LB8Pj6zQFDp1gqotpW9V1coAAA13wAc4It6vpU88qdk6m7kNLZMj07sadS841kaIiD7JSLezHlgGIVD66iuhYxQ8jdGaBMbpcklBIkSWXJxudp9h5GCxGzH53SvHvjGp1ew7OJ56/z+/55/XqNZ4/5/6jW1m1tR+/dtKdrmESZpFTb8+9e2esRdbbX6EfSACW43btt9dnIEgAAAAZsIrwO3JyHXJoRtXhqijaYCnDNH5WI7YYAjZxLJCiCgCglpSk+KAmZrmKP8B3TxY4BQtIOZgRhZjQZiqaEezZf3XbE4K9SFof6PDVqqHFpm2HrGzN92N7IhGFhr/+//iXMut+9903Ac49+Sh/uNDeKG9z3jkOoX/9NLAxvSAAMAAAeoaBwCegUBBoawwhwOUBQXCExI+hAVQVHBpKfLC1qPsX3m2QIOw4hVUj5K3C4IKGmEEyOloeY8+7aesnN0KjFipAxZirS3bIV200FK96z13OvRTfbxRJnrNKa5l+2tnsauzHfHfp/bS12qwS/N2nZ+8NGOv9q0du69zEfdrbNu5ibZl8mb9TJrPPTPTbv718/eYdd+D9gnO75h8V//wwmIKaimZccnBcZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+7JAAAAEUGfE7maAAolK55rNzAAAAAGkHAAAIAAANIOAAAQAEAAQigdjgMAgAAAAA39jhElNj/HD0wt4/6AlM3mX+BhCYLCFPgY0sHeAxor8BdSBkTAFDYBzlFbK8DCGwGkoGFODAAxI7/xPYgMOWJ1GNFK//kcakCL5Ai+RX//MS6UkTIzJo+Xf//1l04iZG5ePmKy7///5wxOHzI2MZdQMVGxkbf////mLmIgBBBADCAEAAAAAAA0+KNFDavP8zgBMELe//mfHZkgf//4CTAHO8VkZYlfws6Bl0B1MDUK1/gJADZQcuBhkANr/y+ZhjULnUzT/8PSJkqmRDRzRcv/+URWooEhxLh+o5QzQy3//5iOSFrojoWITyI6GkQEhozP1//+VETIzHKGaLJDieSJkul04RZMQU1FMy45OC4yAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+7JgAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy45OC4yAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=")
  snd.play()
}

class Player {
  constructor(bat) {
    this.bat = bat
  }

  moveUp(stop) {
    this.bat.moveUp(stop)
  }

  moveDown(stop) {
    this.bat.moveDown(stop)
  }
}

class Score {
  constructor(position) {
    this.el = document.createElement('code')
    this.el.style.position = 'absolute'
    this.el.style.color = theme.PRIMARY
    this.el.style.fontSize = '30px'
    this.el.style[position] = getSize(14)
    this.el.style.top = getSize(5)
    this.el.style.opacity = 0.4
    this.reset()
  }

  reset() {
    this.score = 0
    this.renderScore()
  }

  add() {
    this.score++
    this.renderScore()
  }

  renderScore() {
    this.el.innerText = this.score
  }
}

class Message {
  constructor() {
    this.el = document.createElement('code')
    this.el.style.position = 'absolute'
    this.el.style.color = theme.PRIMARY
    this.el.style.textAlign = 'center'
    this.el.style.fontSize = '18px'
    this.el.style.top = '40%'
    this.el.style.left = '50%'
    this.el.style.transform = 'translateY(-50%) translateX(-50%)'
    this.el.style.opacity = 0.8
    this.reset()
  }

  reset() {
    this.text = 'press ENTER to start'
    this.render()
    this.show()
  }

  hide() {
    this.el.style.display = 'none'
  }

  show() {
    this.el.style.display = 'block'
  }

  render() {
    this.el.innerText = this.text
  }
}

class Bat {
  constructor(position, stage) {
    this.stage = stage
    this.height = 40
    this.width = 5
    this.offset = 5
    this.moveUpTimeout = null
    this.moveDownTimeout = null

    this.el = document.createElement('div')
    this.el.style.position = 'absolute'
    this.el.style.height =  getSize(this.height)
    this.el.style.width = getSize(this.width)
    this.el.style.background = theme.PRIMARY
    this.el.style[position] = getSize(this.offset)

    this.reset()
  }

  reset() {
    this.top = this.stage.height / 2 - this.height / 2
    clearTimeout(this.moveUpTimeout)
    clearTimeout(this.moveDownTimeout)
    this.updatePosition()
  }

  moveUp(stop) {
    if (stop || this.top <= 0) {
      clearTimeout(this.moveUpTimeout)
      return
    }
    this.top--
    this.updatePosition()
    this.moveUpTimeout = setTimeout(this.moveUp.bind(this), settings.SPEED)
  }

  moveDown(stop) {
    if (stop || this.top >= this.stage.height - this.height) {
      clearTimeout(this.moveDownTimeout)
      return
    }
    this.top++
    this.updatePosition()
    this.moveDownTimeout = setTimeout(this.moveDown.bind(this), settings.SPEED)
  }

  updatePosition() {
    this.el.style.transform = `translateY(${getSize(this.top)})`
  }
}

class Ball {
  constructor(app) {
    this.app = app
    this.stage = app.stage
    this.height = 4
    this.width = 4
    this.speed = 5

    this.moveTimeout = null
    
    this.el = document.createElement('div')
    this.el.style.position = 'absolute'
    this.el.style.height =  getSize(this.height)
    this.el.style.width = getSize(this.width)
    this.el.style.background = theme.PRIMARY
    
    this.reset()
  }

  move() {
    if (this.top <= 0 || this.top >= this.stage.height - this.height) {
      this.vector[1] = -this.vector[1]
      beep()
    } else if (this.hasHitBat()) {
      this.calculateNewVector()
      this.direction = this.direction === 'left' ? 'right' : 'left'
      beep()
    } else if (this.left <= 0 || this.left >= this.stage.width - this.width) {
      const scorePosition = this.direction === 'left' ? 'right' : 'left'
      this.stage.scores[scorePosition].add()
      this.app.reset()
      return
    }
    this.left += this.vector[0]
    this.top += this.vector[1]
    this.updatePosition()
    this.moveTimeout = setTimeout(this.move.bind(this), this.speed)
  }

  reset() {
    this.left = this.stage.width / 2 - this.width / 2
    this.top = this.stage.height / 2 - this.height / 2
    this.vector = [1, 0]
    this.direction = 'right'
    clearTimeout(this.moveTimeout)
    this.updatePosition()
  }

  hasHitBat() {
    const bat = this.stage.bats[this.direction]
    if (this.direction === 'left' && this.left > bat.width + bat.offset) {
      return false
    }
    if (this.direction === 'right' && this.left < this.stage.width - bat.width - bat.offset) {
      return false
    }
    if (this.top <= bat.top - this.height || this.top >= bat.top + bat.height + this.height) {
      return false
    }
    return true
  }

  calculateNewVector() {
    const direction = this.direction === 'right' ? -1 : 1
    const bat = this.stage.bats[this.direction]
    const hitValue = (this.top - bat.top + this.height / 2) / bat.height
    const angle = 0.2 * Math.PI + 0.6 * Math.PI * hitValue
    this.vector[0] = Math.sin(angle) * direction
    this.vector[1] = -Math.cos(angle)
  }

  updatePosition() {
    this.el.style.transform = `translateX(${getSize(this.left)}) translateY(${getSize(this.top)})`
  }
}

class Stage {
  constructor(app) {
    this.height = 200
    this.width = 200
    this.bats = {}
    this.scores = {}
    this.message = null

    this.el = document.createElement('div')
    this.el.style.position = 'relative'
    this.el.style.height = getSize(this.height)
    this.el.style.width = getSize(this.width)
    this.el.style.background = theme.BACKGROUND
    app.el.appendChild(this.el)
  }

  addBat(position, bat) {
    this.bats[position] = bat
    this.el.appendChild(bat.el)
  }

  addScore(position, score) {
    this.scores[position] = score
    this.el.appendChild(score.el)
  }

  addBall(ball) {
    this.el.appendChild(ball.el)
  }

  addMessage(message) {
    this.el.appendChild(message.el)
  }
}

class App {
  constructor(selector) {
    this.el = document.querySelector(selector)
    this.players = {}
    this.playing = false
  }

  setupStage() {
    this.stage = new Stage(this)
    this.createPlayer('left')
    this.createPlayer('right')
    this.ball = new Ball(this)
    this.stage.addBall(this.ball)
    this.message = new Message()
    this.stage.addMessage(this.message)
    this.initListeners()
  }

  createPlayer(position) {
    const bat = new Bat(position, this.stage)
    const score = new Score(position)
    this.stage.addBat(position, bat)
    this.stage.addScore(position, score)
    this.players[position] = new Player(bat, score)
  }

  reset() {
    this.playing = false
    this.ball.reset()
    this.message.reset()
    Object.keys(this.stage.bats).forEach(key => {
      this.stage.bats[key].reset()
    })
  }

  play() {
    this.playing = true
    this.message.hide()
    this.ball.move()
  }

  initListeners() {
    window.addEventListener('keydown', this.handleInput.bind(this))
    window.addEventListener('keyup', this.handleInput.bind(this))
  }

  handleInput(event) {
    // Ignore auto-repeated keydown events
    if (event.repeat) {
      return
    }
    if (!this.playing) {
      if (event.key === 'Enter') {
        this.play()
      }
      return
    }
    const stop = event.type === 'keyup'
    switch(event.key) {
      case 'ArrowUp':
        this.players.right.moveUp(stop); break
      case 'ArrowDown':
        this.players.right.moveDown(stop); break
      case 'w':
        this.players.left.moveUp(stop); break
      case 's':
        this.players.left.moveDown(stop); break
    }
  }
}

const app = new App('#app')
app.setupStage()
