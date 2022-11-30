import pandas

# pandas.read_csv('data.csv', index_col='id').to_json('data.json', orient='index')
data = pandas.read_csv('data.csv')

print(data)
