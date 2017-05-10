export class Vacancy {

    constructor(
      public id: number,
      public jobTitle: string,
      public functionTitle: string,
      public company: string,
      public place: string,
      public education: string,
      public contactOfService: string,
      public functionDescription: string,
      public contactInformation: string,
      public salary: number
    ) { }
}

export class VacancyService{

    private data: Vacancy[] = [
        {
          id: 1,
          jobTitle: 'Looking for a business analyst!',
          functionTitle: 'Business analyst',
          company: 'Alfa bank',
          place: 'Kiev',
          education: 'MBO',
          contactOfService: 'Parttime',
          functionDescription: 'Personal Assistant to a very dynamic and focused businessperson, Chief HR  Officer of a large diversified Financial-Industrial Group. Excellent opportu ...',
          contactInformation: 'HR Maria, tel - 0129232424',
          salary: 14000
        },
        {
          id: 2,
          jobTitle: 'Looking for a business analyst!',
          functionTitle: 'Business analyst',
          company: 'Alfa bank',
          place: 'Kiev',
          education: 'MBO',
          contactOfService: 'Parttime',
          functionDescription: 'Personal Assistant to a very dynamic and focused businessperson, Chief HR  Officer of a large diversified Financial-Industrial Group. Excellent opportu ...',
          contactInformation: 'HR Maria, tel - 0129232424',
          salary: 14000
        },
        {
          id: 3,
          jobTitle: 'Looking for a business analyst!',
          functionTitle: 'Business analyst',
          company: 'Alfa bank',
          place: 'Kiev',
          education: 'MBO',
          contactOfService: 'Parttime',
          functionDescription: 'Personal Assistant to a very dynamic and focused businessperson, Chief HR  Officer of a large diversified Financial-Industrial Group. Excellent opportu ...',
          contactInformation: 'HR Maria, tel - 0129232424',
          salary: 14000
        },
        {
          id: 4,
          jobTitle: 'Looking for a business analyst!',
          functionTitle: 'Business analyst',
          company: 'Alfa bank',
          place: 'Kiev',
          education: 'MBO',
          contactOfService: 'Parttime',
          functionDescription: 'Personal Assistant to a very dynamic and focused businessperson, Chief HR  Officer of a large diversified Financial-Industrial Group. Excellent opportu ...',
          contactInformation: 'HR Maria, tel - 0129232424',
          salary: 14000
        },
        {
          id: 5,
          jobTitle: 'Looking for a business analyst!',
          functionTitle: 'Business analyst',
          company: 'Alfa bank',
          place: 'Kiev',
          education: 'MBO',
          contactOfService: 'Parttime',
          functionDescription: 'Personal Assistant to a very dynamic and focused businessperson, Chief HR  Officer of a large diversified Financial-Industrial Group. Excellent opportu ...',
          contactInformation: 'HR Maria, tel - 0129232424',
          salary: 14000
        },
        {
          id: 6,
          jobTitle: 'Looking for a business analyst!',
          functionTitle: 'Business analyst',
          company: 'Alfa bank',
          place: 'Kiev',
          education: 'MBO',
          contactOfService: 'Parttime',
          functionDescription: 'Personal Assistant to a very dynamic and focused businessperson, Chief HR  Officer of a large diversified Financial-Industrial Group. Excellent opportu ...',
          contactInformation: 'HR Maria, tel - 0129232424',
          salary: 14000
        },
        {
          id: 7,
          jobTitle: 'Looking for a business analyst!',
          functionTitle: 'Business analyst',
          company: 'Alfa bank',
          place: 'Kiev',
          education: 'MBO',
          contactOfService: 'Parttime',
          functionDescription: 'Personal Assistant to a very dynamic and focused businessperson, Chief HR  Officer of a large diversified Financial-Industrial Group. Excellent opportu ...',
          contactInformation: 'HR Maria, tel - 0129232424',
          salary: 14000
        },
        {
          id: 8,
          jobTitle: 'Looking for a business analyst!',
          functionTitle: 'Business analyst',
          company: 'Alfa bank',
          place: 'Kiev',
          education: 'MBO',
          contactOfService: 'Parttime',
          functionDescription: 'Personal Assistant to a very dynamic and focused businessperson, Chief HR  Officer of a large diversified Financial-Industrial Group. Excellent opportu ...',
          contactInformation: 'HR Maria, tel - 0129232424',
          salary: 14000
        },
        {
          id: 9,
          jobTitle: 'Looking for a business analyst!',
          functionTitle: 'Business analyst',
          company: 'Alfa bank',
          place: 'Kiev',
          education: 'MBO',
          contactOfService: 'Parttime',
          functionDescription: 'Personal Assistant to a very dynamic and focused businessperson, Chief HR  Officer of a large diversified Financial-Industrial Group. Excellent opportu ...',
          contactInformation: 'HR Maria, tel - 0129232424',
          salary: 14000
        },
        {
          id: 10,
          jobTitle: 'Looking for a business analyst!',
          functionTitle: 'Business analyst',
          company: 'Alfa bank',
          place: 'Kiev',
          education: 'MBO',
          contactOfService: 'Parttime',
          functionDescription: 'Personal Assistant to a very dynamic and focused businessperson, Chief HR  Officer of a large diversified Financial-Industrial Group. Excellent opportu ...',
          contactInformation: 'HR Maria, tel - 0129232424',
          salary: 14000
        }
    ];
    getData(): Vacancy[] {
        return this.data;
    }
    getFilterData(): Vacancy[] {
        return this.data;
    }
    getVacancy(id: number ): Vacancy {
      return this.data[id];
    }
}
