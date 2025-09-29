import React from 'react';

// Maps a form field key to its corresponding label and options in the translations data
const fieldMap = [
    { key: 'location', labelKey: 'locationLabel', optionsKey: 'locationOptions', type: 'select' },
    { key: 'landSize', labelKey: 'landSizeLabel', optionsKey: 'landSizeOptions', type: 'select' },
    { key: 'crop', labelKey: 'cropLabel', optionsKey: 'cropOptions', type: 'select' },
    { key: 'soilType', labelKey: 'soilTypeLabel', optionsKey: 'soilTypeOptions', type: 'select' },
    { key: 'soilCharacter', labelKey: 'soilCharacterLabel', optionsKey: 'soilCharacterOptions', type: 'select' },
    { key: 'irrigation', labelKey: 'irrigationLabel', optionsKey: 'irrigationOptions', type: 'select' },
    { key: 'sowing', labelKey: 'sowingLabel', optionsKey: 'sowingOptions', type: 'select' },
    { key: 'sowingDate', labelKey: 'sowingDateLabel', type: 'date' },
    { key: 'cropStage', labelKey: 'cropStageLabel', optionsKey: 'cropStageOptions', type: 'select' },
    { key: 'problem', labelKey: 'problemLabel', optionsKey: 'problemOptions', type: 'select' },
    { key: 'image', labelKey: 'uploadImageLabel', type: 'file' },
];

function FormInputs({ langData, setFormData }) {
    
    // Handler to update form state in the parent FormSection component
    const handleChange = (e) => {
        const { id, value, type, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: type === 'file' ? files[0] : value
        }));
    };

    return (
        <>
            {fieldMap.map(field => (
                <div key={field.key} className="flex flex-col space-y-1">
                    <label htmlFor={field.key} className="text-sm font-medium text-gray-700">
                        {langData[field.labelKey]}
                    </label>
                    {field.type === 'select' ? (
                        <select
                            id={field.key}
                            onChange={handleChange}
                            className="p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                        >
                            {/* Use null check on options array in case of missing translation, defaults to empty array */}
                            {(langData[field.optionsKey] || []).map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    ) : (
                        <input
                            id={field.key}
                            type={field.type}
                            onChange={handleChange}
                            className="p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                            accept={field.type === 'file' ? 'image/*' : undefined}
                        />
                    )}
                </div>
            ))}
        </>
    );
}

export default FormInputs;