export class FrequentlyAskedQuestion {

    public id: number;
    public question: string;
    public answer: string;

    public static fromRawJson(rawJson: any): FrequentlyAskedQuestion {
        if (!rawJson)
            throw new Error(`Can't create a new FAQ from ${rawJson}`);

        let instance = new FrequentlyAskedQuestion();
        instance.id = +rawJson['id'] || 0;
        instance.question = rawJson['question'] || null;
        instance.answer = rawJson['answer'] || null;

        if (instance.id === 0 || !instance.question || !instance.answer)
            throw new Error(`Invalid datastructure used to generate a faq`);

        return instance;
    }
}
