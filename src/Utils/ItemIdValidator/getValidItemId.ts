export const getValidItemId = (raw_id: string|null|undefined):number =>{
    if (!raw_id ) return -1;
    const id = parseInt(raw_id );
    if (isNaN(id) || id<1) return -1;

    return id;
}