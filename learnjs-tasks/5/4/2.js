let styles = ["Джаз", "Блюз"]
styles.push("Рок-н-ролл")
styles[Math.floor(styles.length/2)] = "Классика"
alert(styles.shift())
styles.unshift("Pan", "Perry")
