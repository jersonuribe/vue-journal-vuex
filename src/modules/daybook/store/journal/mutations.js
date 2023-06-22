// export const myMutation =  (state) => {

// }

export const setEntries = (state, entries) => {

    //desestructura las entries actuales y crea las nuevas
    state.entries = [...state.entries, ...entries]
    state.isLoading = false
}

export const updateEntry = (state, entry) => {
    // entry actualizada

    const idx = state.entries.map(e => e.id).indexOf(entry.id)

    console.log({ idx });
    state.entries[idx] = entry

}

export const addEntry = (state, entry) => {

    state.entries = [entry, ...state.entries]

}

export const deleteEntry = (state, id) => {

    // const indiceAEliminar = state.entries.findIndex((elemento) => elemento.id === id);

    // if (indiceAEliminar !== -1) {
    //     state.entries.splice(indiceAEliminar, 1);
    // }

    // remover del state.entry borrar la entrada por id

    state.entries = state.entries.filter(entry => entry.id !== id)
}