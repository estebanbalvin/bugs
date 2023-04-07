import sqlite3

def get_user_info(username):
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    query = "SELECT * FROM users WHERE username = '{}'".format(username)
    c.execute(query)
    result = c.fetchone()
    conn.close()
    return result
