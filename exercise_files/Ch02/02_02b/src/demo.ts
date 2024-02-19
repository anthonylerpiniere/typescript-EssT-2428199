enum ContactStatus {
    Active = "active",
    Inactive = "inactive",
    New = "new"
}

type ContactName = string

interface Address {
    line1: string
    line2: string
    county: string
    country: string
    postalCode: string
    clone(postalCode: string): Contact
}

interface HomeAddress extends Address {
    addressType: string
}

interface Contact {
    id: number
    name: ContactName
    birthDate?: Date
    address?: HomeAddress
    status: ContactStatus
}

let primaryContact: Contact = {
    id: 12345,
    name: "Joe Jobsons",
    birthDate: new Date("01-01-1989"),
    status: ContactStatus.New
}

function clone<T>(source: T): T {
    return Object.apply({}, source)
}

const a: Contact = { id: 123, name: "Homer Simpson", status: ContactStatus.New}
const b = clone(a)